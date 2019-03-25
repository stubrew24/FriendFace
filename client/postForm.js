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
        const userId = this.el.userId.value

        const post = { comment: comment, user_id: userId }

        //API
        API.createPost(post)
            .then(newPost => TimeLine.addPost(newPost))
    }
}

PostForm.init()