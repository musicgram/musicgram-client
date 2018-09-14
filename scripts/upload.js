Vue.component('upload-file',{
    template :`
    <div class="form-upload">
            <form v-if="!finishUpload">
                <input v-model="title" type="text" placeholder="title">
                <input type="file" v-on:change="getSound($event)">
                <button type="button" @click="upload">Upload</button>
            </form>

            <div>
            <div class="lds-ring" v-if="finishUpload"><div></div><div></div><div></div><div></div></div>
            <h2 class="load" v-if="finishUpload">Loading</h2>

            </div>
        </div>
    `,
    data(){
        return{
            urlSound : '',
            title : '',
            finishUpload : false
        }
    },
    methods : {
        getSound(link) {
            this.urlSound = link.target.files[0]
            console.log("ini image", this.urlSound);

        },
        upload() {
            this.finishUpload = true;
            let formData = new FormData()
            formData.append("image", this.urlSound)
            let self = this
            console.log(formData, '<-- form data')
            axios.post('http://apimusic.minimalistcoder.xyz/upload', formData)
                .then((image) => {
                    let file = image.data.link
                    let token = localStorage.getItem('token')
                    axios.post('http://apimusic.minimalistcoder.xyz/musics', {
                            title : this.title,
                            file: file
                        },{headers:{authorization: `Bearer ${token}`}})
                        .then(response => {
                            console.log('===>1', response.data)
                            let data = {musicId : response.data.musicId}
                            let token = localStorage.getItem('token')

                            axios.post('http://apimusic.minimalistcoder.xyz/users/addMusic',data,{headers:{authorization: `Bearer ${token}`}})
                                .then(finaldata =>{
                                    console.log('===>2', response.data)
                                    console.log(response.data, 'image')
                                    let data = {
                                        music : {
                                            user : {
                                                name :response.data.name,
                                                _id : response.data.id
                                            },
                                        title : response.data.newMusic.title,
                                        file : response.data.newMusic.file
                                    }}
                                    self.$emit('add-new-music',data)
                                    self.urlSound = "";
                                    self.title = "";
                                    self.finishUpload = false;
                                })
                                .catch(err =>{
                                    console.log('===>3',err.response);

                            })
                        })
                        .catch(err =>{
                            console.log('===>4',err);

                        })
                })
                .catch((err) => {
                    console.log(err);

                });
        }
    }
  });