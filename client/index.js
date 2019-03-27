function initialize() {
    API.getPosts()
        .then(posts => TimeLine.addPosts(posts))
}
initialize()