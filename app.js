import content from './data/sicherheitshinweise.js'

export default {
    name: 'Test',

    setup() {
        const title = "IT-Sicherheit Adventskalender";
        
        return {
            title
        };
    },
	data(){
		return {
			content: content,
		}
	},
	methods:{
		showDay(cDay){
			alert(cDay.text)
		}
	},
    
    template: `
      <div>
        <h1>{{title}}</h1>
		<div id="rahmen">
		<div v-for="c in content" class="door" @click="showDay(c)">
			{{c.tag}}
		</div>
		</div>
      </div>
    `,
};