class PostForm {
    static init() {
        this.el = document.querySelector("#post-form")
        this.addCreateEvent()
    }

    static addCreateEvent() {
        this.el.addEventListener("submit", event => this.handleCreate(event))
    }

    static handleCreate(event) {
        debugger
        event.preventDefault()

        const comment = this.el.comment.value
        const userId = document.cookie()

        const post = { comment: comment, user_id: userId }

        API.createPost(post)
            .then(newPost => TimeLine.addPost(newPost))
    }
}

PostForm.init()