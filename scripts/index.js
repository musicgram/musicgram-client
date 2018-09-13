const app = new Vue({
  el: '#app',
  data() {
    return{
      openLogin : false,
      openRegister : false,
      isLogin : false
    }
  },
  methods : {
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