Vue.component('nav-bar',{
  template :`
  <div class="navbar">
      <div class="container-nav-bar">
        <div class="logo">
          <h1>musicgram</h1>
        </div>
        <div class="login">
          <ul>
            <li id="login-button" @click = "openLogin">login</li>
            <li id="register-button" @click = "openRegister">register</li>
          </ul>
        </div>
      </div>

      <div class="landing">
        <h2>explore the best music out there</h2>
      </div>

    </div>
  `,
  methods : {
    openLogin(){
      this.$emit('open-login');
    },
    openRegister(){
      console.log('masuk');
      this.$emit('open-register');
    }
  }
});