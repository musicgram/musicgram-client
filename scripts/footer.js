Vue.component('main-footer',{
  template :`
  <div class="footer">
  <h3>join us today</h3>
  <h3 id="register-footer" @click="openRegister">register</h3>
  <h4>
    Copyright © 2018 musicgram
  </h4>
</div>
  `,
  methods : {
    openRegister(){
      this.$emit('opening-register');
    }
  }
});