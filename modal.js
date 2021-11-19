
export default {
    name: 'modal',
	props: ['header', 'text', 'message'],
	data(){
		return {
		}
	},
	methods:{
		escape(text){
  		  if(!text) return ""
		  
		  return text.replace(/(?:\r\n|\r|\n)/g, '<br>');
	  		
		},
		close(){
			this.$emit('close')
		}
	},
    
    template: `
      <div class="modal-background" @click="close">
	    <div class="modal" :class="{message: message}">
	      <div class="modal-header">
		    <span>&#9447;</span>
		    <h3>{{header}}</h3>
          </div>
		  <div class="modal-content">
		    <span v-html="escape(text)"></span>
		  </div>
		</div>
      </div>	  
    `,
};