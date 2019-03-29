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

        const comment = this.el.comment.value
        const userId = document.cookie.split('=')[2];

        const storageRef = firebase.storage().ref();

            const postImagesRef = storageRef.child(`postImages/${Date.now()}.jpg`);
            const imageInput = this.el.file
            const imageFile = imageInput.files[0]

            postImagesRef.put(imageFile).then(function(snapshot) { 
                snapshot.ref.getDownloadURL().then(url => {
                    const post = { comment: comment, user_id: userId, image: url }

                    API.createPost(post)
                        .then(newPost => {
                            TimeLine.addPost(newPost);
                            UserForm.currentUser.allPosts.unshift(new Post(newPost).el);
                            this.el.comment.value = "";
                        })

                });
            });

       
    }
}

PostForm.init()