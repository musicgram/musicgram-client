Vue.component('music-bar',{
  template : `

  <div class="container-audio">
    <h2>{{ music.title }}</h2>
      <audio controls autostart = "0">
        <source :src="music.file" type="audio/mpeg">
        Your browser dose not Support the audio Tag
      </audio>
    </div>

  `,
  data(){
    return {
    }
  },

  methods: {

  },
  props : ['music']
});