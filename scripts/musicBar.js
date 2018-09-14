Vue.component('music-bar',{
  template : `

  <div class="container-audio">
    <h5 style="text-align: right"><a href="javascript:void(0)" @click="deleteMusic" v-if="music.user._id === userId">Delete</a></h5>
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
      baseurl: 'http://localhost:3000',
      userId: ''
    }
  },

  methods: {
    deleteMusic() {
      const id = this.music._id;
      let self = this;
      let token = localStorage.getItem('token');

      axios({
        method: 'delete',
        url: `${self.baseurl}/${id}`,
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        let deletedId = response.data.id;
        self.$emit('delete-music', deletedId);
      })
      .catch(err => {

      });
    }
  },
  created() {
    this.userId = localStorage.getItem('user_id');
  },
  props : ['music']
});