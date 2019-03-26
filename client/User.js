class User {
    constructor(user) {
        this.id = user.id
        this.f_name = user.f_name;
        this.l_name = user.l_name;
        this.image = user.image;
        this.tagline = user.tagline;
        this.location = user.location;
        this.email = user.email
        this.fullName = this.f_name + " " + this.l_name <<
            << << < HEAD

        document.cookie = `userId=${this.id}`; ===
        === =
        this.create() >>>
            >>> > 33992 baaf47e6b134c89a0ac61ec57bcf8a8da22
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
            
            <div class="col text-center">
                <a href="#" id="user-posts" class="btn btn-outline-dark"">View Posts</a>
            </div>
        </div>
    </div>`
        sideBar.querySelector("#user-posts").addEventListener("click", () => this.showPosts())
    }

    showPosts() {
        //TimeLine.addPosts()  
    }
}