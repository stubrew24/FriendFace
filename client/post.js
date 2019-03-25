class Post {
    constructor(post) {
        this.comment = post.comment
        this.like_count = post.like_count
        this.created_at = post.created_at
        this.updated_at = post.updated_at
        this.el = document.createElement("div")
        this.el.className = "card-body list-group-item"
        this.create()
    }

    create() {
        this.el.innerHTML = `
        <img src="images/placeholder.jpg" height="50" class="profile-img"><br><br>
        <p class="card-text">${this.comment}</p>
        <p class="card-text"><small class="text-muted">Posted at ${this.created_at}</small></p>`
    }
}