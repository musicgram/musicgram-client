Vue.component('upload-file',{
    template :`
    <div class="form-upload">
            <form>
                <input type="text" placeholder="title">
                <input type="file" v-on:change="getSound($event)">
                <button type="button" @click="upload">Upload</button>
            </form>

        </div>
    `,
    data(){
        return{
            urlSound : '',
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
                    console.log(dataImg);
                    
                    console.log(dataImg);
                    axios.post('http://localhost:3000/musics', {
                            title : title,
                            file: file
                        },{headers:{authorization: `Bearer ${token}`}})
                        .then(dataUpload => {
                            console.log('========', dataUpload)
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