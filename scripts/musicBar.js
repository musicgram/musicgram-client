Vue.component('music-bar',{
  template : `

  <div class="container-audio">
    <h2>{{ music.title }}</h2>
    <h5>{{ music.user.name }}</h5>
      <audio controls autostart = "0">
        <source :src="music.file" type="audio/mpeg">
        Your browser dose not Support the audio Tag
      </audio>
      <div class="socmedbutton">
      <a :href="\'https://twitter.com/intent/tweet?text=\'+music.file" class="twitter-share-button" data-show-count="false"><img src="http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png"></a>

      <div class="fb-share-button" :data-href="\'music.file'\" data-layout="button_count" data-size="small" data-mobile-iframe="true"><a target="_blank" :href="\'https://www.facebook.com/sharer/sharer.php?u=\'+music.file" class="fb-xfbml-parse-ignore"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png"></a></div>
      </div>


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