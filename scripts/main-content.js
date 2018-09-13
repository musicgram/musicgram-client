Vue.component('main-content',{
  template : `
  <div class="content-container">
    <h1>Lists of Musics</h1>
    <div class="content" v-for="music in musics" >
      <music-bar :music="music"></music-bar>
    </div>
  </div>
  `,
  data(){
    return {
      musics : []
    };
  },

  methods: {

  }
});