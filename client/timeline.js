class TimeLine {
    static init() {
        this.el = document.querySelector("#timeline")
    }

    static addPost(post) {
        const newPost = new Post(post)
        this.el.prepend(newPost.el)
        
    }

    static addPosts(posts) {
        posts.forEach(post => this.addPost(post))
    }
}

TimeLine.init()