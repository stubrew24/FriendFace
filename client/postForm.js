class PostForm {
    static init() {
        this.el = document.querySelector("#post-form")
        this.addCreateEvent()
    }

    static addCreateEvent() {
        this.el.addEventListener("submit", event => this.handleCreate(event))
    }

    static handleCreate(event) {
        event.preventDefault()

        const comment = this.el.comment.value;
        const userId = document.cookie.split('=')[2];
        if (this.el.file.files.length > 0) {
            const storageRef = firebase.storage().ref();

            const postImagesRef = storageRef.child(`postImages/${Date.now()}.jpg`);
            const imageFile = this.el.file.files[0]

            postImagesRef.put(imageFile).then(function(snapshot) { 
                snapshot.ref.getDownloadURL().then(url => {
                    PostForm.savePost({ comment: comment, user_id: userId, image: url });
                });
            });
        } else {
            this.savePost({comment: comment, user_id: userId, image: null});
        }
    }

    static savePost (post){
        API.createPost(post)
        .then(newPost => {
            TimeLine.addPost(newPost);
            UserForm.currentUser.allPosts.unshift(new Post(newPost).el);
            this.el.comment.value = "";
            document.querySelector('#postimgprev').style.display = "none";
            document.querySelector('.btn-upload').style.display = "block";
        })
    }

    static readURL(input) {
        if (input.files && input.files[0])
         {
            var reader = new FileReader();
            reader.onload = function (e) { 
                document.querySelector('#postimgprev').src = e.target.result; 
                document.querySelector('#postimgprev').style.display = "block";
                document.querySelector('.btn-upload').style.display = "none";
                document.getElementById('textbox').className = 'col-sm-7';
                document.getElementById('imageselect').className = 'col-sm-3';
            };
            reader.readAsDataURL(input.files[0]);
        }
    }


}

PostForm.init()