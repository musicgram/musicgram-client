Vue.component('main-content',{
  template : `
  <div class="content-container">
    <h1>Lists of Musics</h1>
    <div class="content" v-for="music in musics" >
      <music-bar :music="music" @delete-music="deleteMusic"></music-bar>
      <music-animation></music-animation>
    </div>
    <div class="lds-ring" v-if="musics.length===0||musics===undefined"><div></div><div></div><div></div><div></div></div>

  </div>
  `,
  props:['addmusic'],
  data(){
    return {
      baseurl: 'apimusic.minimalistcoder.xyz',
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
    deleteMusic(id) {
      this.musics.forEach((data, index) => {
        if(data._id === id) {
          this.musics.splice(index, 1);
        }
      });
    }
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