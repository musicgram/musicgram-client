Vue.component('upload-file',{
    template :`
    <div class="form-upload">
            <form>
                <input v-model="title" type="text" placeholder="title">
                <input type="file" v-on:change="getSound($event)">
                <button type="button" @click="upload">Upload</button>
            </form>

        </div>
    `,
    data(){
        return{
            urlSound : '',
            title : ''
        }
    },
    methods : {
        getSound(link) {
            this.urlSound = link.target.files[0]
            console.log("ini image", this.urlSound);

        },
        upload() {
            let formData = new FormData()
            formData.append("image", this.urlSound)
            console.log(formData, '<-- form data')
            axios.post('http://localhost:3000/upload', formData)
                .then((image) => {
                    let file = image.data.link
                    let token = localStorage.getItem('token')                    
                    axios.post('http://localhost:3000/musics', {
                            title : this.title,
                            file: file
                        },{headers:{authorization: `Bearer ${token}`}})
                        .then(response => {
                            
                            let data = {musicId : response.data.musicId}
                            axios.post('http://localhost:3000/users/addMusic',data,{headers:{authorization: `Bearer ${token}`}})
                            .then(response =>{
                                console.log(response);
                                
                            })
                            .catch(err =>{
                                console.log(err.response);
                                
                            })
                        })
                        .catch(err =>{
                            console.log(err);
                            
                        })
                })
                .catch((err) => {
                    console.log(err);

                });
        }
    }
  });