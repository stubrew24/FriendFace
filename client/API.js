class API {

    static initialize() {
        this.baseUrl = 'http://localhost:3000'
        this.usersUrl = this.baseUrl + '/users'
        this.postsUrl = this.baseUrl + '/posts'

    }

    //GET SINGLE USER
    static getUsers(user) {
        return fetch(this.usersUrl + `/${user.id}`)
            .then(resp => resp.json())
    }

    //GET ALL USERS
    static getUsers() {
        return fetch(this.usersUrl)
            .then(resp => resp.json())
    }

    //CREATE USER
    static createUser(user) {
        return fetch(this.usersUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(resp => resp.json())
    }

    //UPDATE USER
    //DELETE USER

    //GET SINGLE POST
    static getPost(post) {
            return fetch(this.postsUrl + `/${post.id}`)
                .then(resp => resp.json())
        }
        //GET ALL POSTS
    static getPosts() {
        return fetch(this.postsUrl)
            .then(resp => resp.json())
    }

    //CREATE POST
    static createPost(post) {
        return fetch(this.postsUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        }).then(resp => resp.json())
    }

    //UPDATE POST
    //DELETE POST
}

API.initialize()