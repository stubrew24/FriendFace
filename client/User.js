class User {
    constructor(user) {
        this.id = user.id
        this.f_name = user.f_name;
        this.l_name = user.l_name;
        this.image = user.image ? user.image : 'images/placeholder.jpg';
        this.tagline = user.tagline;
        this.location = user.location;
        this.email = user.email
        this.fullName = this.f_name + " " + this.l_name
        document.cookie = `userEmail=${this.email}`; 
        this.create();
    }

    create() {
        const sideBar = document.querySelector("#sidebar")
        sideBar.innerHTML = `
        <div class="card" style="width: 255px"  id="profile">
        <img src="${this.image}" class="card-img-top">
        <div class="card-body">
            <h4 class="card-title text-center" id="name">${this.fullName}</h4>
            <p class="card-text" id="tagline">${this.tagline}.</p>
            <p class="card-text" id="location">${this.location}</p>
            
            <div class="row text-center">
                <a href="#" id="user-posts" class="btn btn-outline-dark offset-sm-1 col-sm-5">My Posts</a>
                <a href="#" id="sign-out" class="btn btn-outline-dark offset-sm-1 col-sm-4">Logout</a>
            </div>
        </div>
    </div>`
        sideBar.querySelector("#user-posts").addEventListener("click", () => this.showPosts())
        sideBar.querySelector("#sign-out").addEventListener("click", () => {
            document.cookie += "; max-age=0"; location.reload();
        });
    }

    showPosts() {
        //TimeLine.addPosts()  
    }
}