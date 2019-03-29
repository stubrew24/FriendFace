class Post {
    constructor(post) {
        this.comment = post.comment
        this.like_count = post.like_count
        this.created_at = post.created_at.split("T")[0]
        this.updated_at = post.updated_at
        this.postImage = post.image
        this.username = post.user.f_name + " " + post.user.l_name
        this.image =  post.user.image || 'images/placeholder.jpg'
        this.postId = post.id;
        this.user = post.user.id;

        this.el = document.createElement("div")
        this.el.className = "card-body list-group-item"
        this.el.dataset.userId = post.user.id
        if (this.postImage){   
            this.createWithImage();
        } else {
            this.create();
        }
        this.addDeleteListener()
    }

    addDeleteListener(){
        if(this.el.querySelector(".delete-btn")){
            this.el.querySelector(".delete-btn").addEventListener("click", () => {
                this.el.remove();
                API.deletePost(this.postId);
            });
        }
    }

    createDeleteBtn(){
        let deleteBtn = document.createElement("button")
        this.el.appendChild(deleteBtn)
        deleteBtn.className = "delete-btn"
        deleteBtn.innerText = "Remove"
    }

    deleteButton(){
        if (document.cookie){
            let userId = document.cookie.split('=')[2];
            if (this.user == userId){
                this.createDeleteBtn();
            }
        }
    }

    create() {
        this.el.innerHTML = `
        <img src="${this.image}" height="50" class="profile-img"><br><br>
        <p class="card-text">${this.username}</p>
        <p class="card-text">${this.comment}</p>
        <p class="card-text"><small class="text-muted">Posted at ${this.created_at}</small></p>`
        this.deleteButton();
    }

    createWithImage(){
        this.el.classList.add('mb-3');
        this.el.innerHTML = `    
            <div class="row no-gutters">
                <div class="col-md-8">
                    <img src="${this.image}" height="50" class="profile-img"><br><br>
                    <p class="card-text">${this.username}</p>
                    <p class="card-text">${this.comment}</p>
                    <p class="card-text"><small class="text-muted">Posted at ${this.created_at}</small></p>
                </div>
                <div class="col-md-4">
                    <img src="${this.postImage}" class="card-img" >
                </div>
            </div>`;
        this.deleteButton();
    }


}