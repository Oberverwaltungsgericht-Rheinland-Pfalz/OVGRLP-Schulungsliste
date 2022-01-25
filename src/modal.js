const checkMedia = /(.*\.mp4)|(.*\.ogg)|(.*\.webm)/
const checkImage = /(.*\.jp[e]?g)|(.*\.png)|(.*\.gif)|(.*\.svg)|(.*\.bmp)|(.*\.webp)/

export default {
  name: 'modal',
  props: ['header', 'text', 'message', 'media'],
  data () {
    return {
      now: Date.now()
    }
  },
  computed: {
    isVideo () {
      return checkMedia.test(this.media)
    },
    isImage () {
      return checkImage.test(this.media)
    }

  },
  methods: {
    styleModal () {
      if (this.isVideo) return 'height: fit-content;'
      else if (this.isImage) return 'width: fit-content; max-width: 100vw; max-height: fit-content;'
      else return ''
    },
    escape (text) {
      if (!text) return ''

      return text.replace(/(?:\r\n|\r|\n)/g, '<br>')
    },
    close () {
      this.$emit('close')
    }
  },

  template: `
<div class="modal-background" @click="close">
  <div class="modal" :class="{ message: message }" :style="styleModal()">
    <div class="modal-header">
      <span>&#9447;</span>
      <h3>{{ header }}</h3>
    </div>
    <div class="modal-content">
      <span v-if="text" v-html="escape(text)"></span>
      <video
        v-if="isVideo"
        :key="'videokey' + now"
        :class="'videokey' + now"
        controls=""
        autoplay=""
        name="media"
        style="height: 100%; width: 100%"
      >
        <source :src="'media/' + media" type="video/mp4" />
      </video>
      <img v-else-if="isImage" :src="'media/' + media" id="modal-img" />
    </div>
  </div>
</div>`
}
