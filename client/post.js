class Post {
    constructor(post) {
        this.comment = post.comment
        this.like_count = post.like_count
        this.created_at = post.created_at
        this.updated_at = post.updated_at

        this.el = document.createElement("div")
        this.el.className = "..."
        this.create()
    }

    create() {
        this.el.innerHTML = `BOOOYYSS`
    }
}