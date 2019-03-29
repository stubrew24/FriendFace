class Post {
    constructor(post) {
        this.postId = post.id
        this.comment = post.comment
        this.like_count = post.like_count
        this.created_at = post.created_at.split("T")[0]
        this.updated_at = post.updated_at
        this.username = post.user.f_name + " " + post.user.l_name

        this.el = document.createElement("div")
        this.el.className = "card-body list-group-item"

        this.create()
        this.addDeleteListener()
        
    }

    addDeleteListener(){
        this.el.querySelector(".delete-btn").addEventListener("click", () => {
            this.el.remove()
            API.deletePost(this.postId)
        })
    }

    create() {
        this.el.innerHTML = `
        <img src="images/placeholder.jpg" height="50" class="profile-img"><br><br>
        <p class="card-text">${this.username}</p>
        <p class="card-text">${this.comment}</p>
        <p class="card-text"><small class="text-muted">Posted at ${this.created_at}</small></p>
        <button class="delete-btn" type="button">Delete</button>`
    }
}