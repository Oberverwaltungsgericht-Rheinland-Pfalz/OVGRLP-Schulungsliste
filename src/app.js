import content from '../configuration/karten.js'
import modal from './modal.js'
import hinweise from './../configuration/allgemein.js'

export default {
  name: 'Test',
  components: { modal },
  setup () {
    const title = hinweise.title

    return {
      title, copyrightMark: hinweise.copyrightMark
    }
  },
  data () {
    return {
      liste: [],
      text: '',
      header: '',
      showModal: false,
      modalMedia: '',
      modalMessage: false,
      content: content.sort(() => Math.random() - 0.5)
    }
  },
  mounted () {
    const listeJSON = window.localStorage.getItem(hinweise.dbKeyCheckDoors)
    if (!listeJSON) return
    const liste = JSON.parse(listeJSON)
    this.liste.push(...liste)
  },
  methods: {
    showDay (cDay) {
      const d = new Date()
      const date = d.getDate()
      if (cDay.tag > date && d.toISOString() < '2021-12-24') {
        this.openModal(hinweise.waitInfoHeader, hinweise.waitInfo.replace(/{clickedDay}/g, cDay.tag), true)
        return
      }

      // Zeige Infotext
      this.openModal(cDay.header, cDay.text, cDay.media)
      this.liste.push(cDay.tag)
      this.persist()
    },
    openModal (header, text, media, message) {
      this.text = text
      this.header = header
      this.modalMessage = Boolean(message)
      this.modalMedia = media || ''
      this.showModal = true
    },
    persist () {
      window.localStorage.setItem(hinweise.dbKeyCheckDoors, JSON.stringify(this.liste))
    },
    isVisible (tag) {
      return this.liste.includes(tag)
    }
  },

  template: `
  <div>
    <modal
      v-if="showModal"
      @close="showModal = false"
      :media="modalMedia"
      :text="text"
      :header="header"
      :message="modalMessage"
    />
    <h1>{{ title }}</h1>
    <div id="rahmen">
      <div
        v-for="(c, idx) in content"
        class="door"
        @click="showDay(c)"
        :class="{ mark: isVisible(c.tag) }"
        :key="'door' + idx"
      >
        <div class="center">
          {{ c.tag }}
          <span v-if="isVisible(c.tag)" class="mark">&#10003;</span>
        </div>
      </div>
    </div>
    <div class="cp-mark">{{ copyrightMark }}</div>
  </div>
    `
}
