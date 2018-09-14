Vue.component('command',{
    template :`
<div class="container">
    <div class="container__item">
        <form class="form">
            <input type="text" v-model="command" class="form__field" placeholder="........." />
            <button @click="sound(command)" type='button' value='🔊 Play' class="btn btn--primary btn--inside uppercase"><img
                    src="../images/play-button.png"></button>
        </form>
    </div>
</div>
    `,
    data() {
        return{
            command: '',
            urlSound:''
        }
    },
    methods: {
        sound(command) {
            responsiveVoice.speak(command)
        }
    }
  });
  