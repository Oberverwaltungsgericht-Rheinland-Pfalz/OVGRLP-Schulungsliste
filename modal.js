const checkMedia = /(.*\.mp4)|(.*\.ogg)|(.*\.webm)/g;

export default {
    name: 'modal',
	props: ['header', 'text', 'message', 'media'],
	data(){
		return {
			now: Date.now()
		}
	},
	computed: {
	},
	methods:{
		isVideo () {
			let r = checkMedia.test(this.media)
			console.log("is video "+r + this.media)
			return r
		  },
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
		    <span v-if="text" v-html="escape(text)"></span>
			<video v-if="media" :key="'videokey'+now" :class="'videokey'+now" controls="" autoplay="" name="media" style="height: 100%;width: 100%;">
			  <source :src="'media/'+media" type="video/mp4">
			</video>
		  </div>
		</div>
      </div>	  
    `,
};