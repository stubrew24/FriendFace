class Post {
    constructor(post) {
        this.comment = post.comment
        this.like_count = post.like_count
        this.created_at = post.created_at.split("T")[0]
        this.updated_at = post.updated_at
        this.postImage = post.image
        this.username = post.user.f_name + " " + post.user.l_name
        this.image =  post.user.image || 'images/placeholder.jpg'

        this.el = document.createElement("div")
        this.el.className = "card-body list-group-item"
        this.el.dataset.userId = post.user.id

        this.create()
    }

    create() {
        this.el.innerHTML = `
        <img src="${this.image}" height="50" class="profile-img"><br><br>
        <p class="card-text">${this.username}</p>
        <p class="card-text">${this.comment}</p>
        <p class="card-text"><img src="${this.postImage}"></p>
        <p class="card-text"><small class="text-muted">Posted at ${this.created_at}</small></p>`

    }
}