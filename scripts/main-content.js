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
      baseurl: 'http://localhost:3000',
      musics : []
    };
  },

  methods: {

  },

  created: function() {
    let self = this;

    axios({
      method: 'get',
      url: `${this.baseurl}/`
    })
    .then(response => {
      self.musics = response.data.musics
    })
    .catch(err => {
      console.log(err);
    });
  }
});