class PostForm {
    static init() {
        this.el = document.querySelector("#form")
    }

    static addCreateEvent() {
        this.el.addEventListener("submit", event => this.handleCreate(event))
    }

    static handleCreate(event) {
        event.preventDefault()

        const { comment, user_id } = this

        //API
    }
}

PostForm.init()