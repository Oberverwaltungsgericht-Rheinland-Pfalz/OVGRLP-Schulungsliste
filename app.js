import content from './data/sicherheitshinweise.js'
import modal from './modal.js'

export default {
    name: 'Test',
	components:{modal},
    setup() {
        const title = "IT-Sicherheit Adventskalender";
        
        return {
            title
        };
    },
	data(){
		return {
			liste: [], text:'', header:'', showModal: false,
			content: content.sort(() => Math.random() - 0.5),
		}
	},
	mounted(){
		var listeJSON = localStorage.getItem('liste')
		if(!listeJSON) return;
		var liste = JSON.parse(listeJSON)
		this.liste.push(...liste)
	},
	methods:{
		showDay(cDay){
			var d = new Date();
			var date = d.getDate()
			if(cDay.tag > date && d.toISOString() < '2021-12-24') {
				alert("Auf den "+cDay.tag+". Dezember musst du noch etwas warten")
				return;
			}
			
			this.text = cDay.text
			this.header = cDay.header
			this.showModal=true;

			this.liste.push(cDay.tag)
			this.persist()
		},
		persist(){
			localStorage.setItem('liste', JSON.stringify(this.liste))
		},
		isVisible(tag) {
			return this.liste.includes(tag)
		}
	},
    
    template: `
      <div>
	  <modal v-if="showModal" @close="showModal=false" 
		:text="text" :header="header"/>
        <h1>{{title}}</h1>
		<div id="rahmen">
		  <div v-for="c in content" class="door" @click="showDay(c)" :class="{'mark':isVisible(c.tag)}">
			<div class="center">
			  {{c.tag}} 
			  <span v-if="isVisible(c.tag)" class="mark">&#10003;</span>
			</div>
		  </div>
		</div>
      </div>
    `,
};