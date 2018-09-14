Vue.component('nav-bar',{
  template :`
  <div class="navbar">
      <div class="container-nav-bar">
        <div class="logo">
          <h1>musicgram</h1>
        </div>
        <div class="login">
          <ul>
            <li v-if="!logstatus" id="login-button" @click = "openLogin">login</li>
            <li v-if="!logstatus" id="register-button" @click = "openRegister">register</li>
            <li v-if="logstatus" id="register-button" @click = "logOut">log out</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  methods : {
    openLogin(){
      this.$emit('open-login');
    },
    openRegister(){
      this.$emit('open-register');
    },
    logOut(){
      this.$emit('log-out');
    }
  },
  props : ['logstatus'],
  data(){
    return {
      isLogin : this.logstatus
    };
  }
});