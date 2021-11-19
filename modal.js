
export default {
    name: 'modal',
	props: ['header', 'text'],
	data(){
		return {
		}
	},
	methods:{
		close(){
			this.$emit('close')
		}
	},
    
    template: `
      <div class="modal-background" @click="close">
	    <div class="modal">
	      <div class="modal-header">
		    <h3>{{header}}</h3>
          </div>
		  <p v-html="text"></p>
		</div>
      </div>	  
    `,
};