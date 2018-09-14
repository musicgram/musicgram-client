Vue.component('main-content',{
  template : `
  <div class="content-container">
    <h1>Lists of Musics</h1>
    <div class="content" v-for="music in musics" >
      <music-bar :music="music"></music-bar>
      <music-animation></music-animation>
    </div>
  </div>
  `,
  props:['addmusic'],
  data(){
    return {
      baseurl: 'http://localhost:3000',
      musics : [],
      userId: ''
    };
  },
  watch:{
    addmusic(){
      this.musics.push(this.addmusic[0].music)
    }
  },
  methods: {

  },

  created: function() {
    let self = this;

    this.userId = localStorage.getItem('id');

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