const app = new Vue({
  el: '#app',
  data() {
    return{
      openLogin : false,
      openRegister : false,
      isLogin : false,
      musics : []
    }
  },
  watch:{
    musics(){
      console.log('emit di parent===>',this.musics)
    }
  },
  methods : {
    addmusic(value){
      console.log('hahahahaha', value)
      this.musics.push(value)
    },
    logOut(){
      localStorage.removeItem("token");
      this.isLogin = false;
    }
  },
  created(){
    const token = localStorage.getItem('token');
    if(token!==null){
      this.isLogin = true;
    } else{
      this.isLogin = false;
    }

    if(this.isLogin === true){
      this.openLogin = false;
    }
  }
});