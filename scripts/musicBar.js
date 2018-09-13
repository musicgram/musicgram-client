Vue.component('music-bar',{
  template : `

  <div class="container-audio">
      <audio controls autostart = "0">
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg" type="audio/ogg">
        Your browser dose not Support the audio Tag
      </audio>
    </div>

  `,
  data(){
    return {

    }
  },

  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  }
});