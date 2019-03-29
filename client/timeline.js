class TimeLine {
    static init() {
        this.el = document.querySelector("#timeline")
        //this.myPostBtn = document.getElementById("user-posts")
        //this.allPosts = document.querySelectorAll('div[data-user-id]:not([data-user-id="14"])')
        //this.myPosts()
    }

    static addPost(post) {
        const newPost = new Post(post)
        this.el.prepend(newPost.el)
        
    }

    static addPosts(posts) {
        posts.forEach(post => this.addPost(post))
    }

    // static myPosts(){
    //     document.getElementById("user-posts").addEventListener("click", ()=>{
    //         this.allPosts.forEach(post => post.remove())
    //     })
    // }
}

TimeLine.init()