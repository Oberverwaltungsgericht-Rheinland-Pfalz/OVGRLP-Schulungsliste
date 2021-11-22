import content from './data/sicherheitshinweise.js'
import modal from './modal.js'
import hinweise from './data/hinweise.js'

export default {
    name: 'Test',
	components:{modal},
    setup() {
        const title = hinweise.title;
        
        return {
            title, copyrightMark: hinweise.copyrightMark
        };
    },
	data(){
		return {
			liste: [], 
			text:'', header:'', showModal: false, modalMessage: false,
			content: content.sort(() => Math.random() - 0.5),
		}
	},
	mounted(){
		var listeJSON = localStorage.getItem(hinweise.dbKeyCheckDoors)
		if(!listeJSON) return;
		var liste = JSON.parse(listeJSON)
		this.liste.push(...liste)
	},
	methods:{
		showDay(cDay){
			var d = new Date();
			var date = d.getDate()
			if(cDay.tag > date && d.toISOString() < '2021-12-24') {
				this.openModal('Zu früh', "Auf den "+cDay.tag+". Dezember musst du noch etwas warten 😿", true)
				return;
			}

			// Zeige Infotext
			this.openModal(cDay.header, cDay.text)
			this.liste.push(cDay.tag)
			this.persist()
		},
		openModal(header, text, message){
			this.text = text
			this.header = header
			this.modalMessage = Boolean(message)
			this.showModal = true;
		},
		persist(){
			localStorage.setItem(hinweise.dbKeyCheckDoors, JSON.stringify(this.liste))
		},
		isVisible(tag) {
			return this.liste.includes(tag)
		}
	},
    
    template: `
      <div>
	  <modal v-if="showModal" @close="showModal=false" 
		:text="text" :header="header" :message="modalMessage"/>
        <h1>{{title}}</h1>
		<div id="rahmen">
		  <div v-for="c in content" class="door" @click="showDay(c)" :class="{'mark':isVisible(c.tag)}">
			<div class="center">
			  {{c.tag}} 
			  <span v-if="isVisible(c.tag)" class="mark">&#10003;</span>
			</div>
		  </div>
		</div>
		<div class="cp-mark">{{copyrightMark}}</div>
      </div>
    `,
};