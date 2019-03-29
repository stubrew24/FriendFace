class UserForm {

    static init(){

        this.signinBox = document.getElementById('signin');
        this.signInForm = document.getElementById('signinform');

        this.profile = document.getElementById('profile');
        this.createBtn = document.getElementById('createAccount');

        this.signupBox = document.getElementById('signup');
        this.signupForm = document.getElementById('signupform');

        this.postForm = document.getElementById('postform');

        this.currentUser = null;

        this.loggedIn();
        this.createUser();
        this.signup();
        this.signin();
    }

    // static addCreateEvent(){
    //     this.el.addEventListener("submit", event => this.handleCreate(event))
    // }

    static loggedIn(){
        if (document.cookie) {
            this.signinBox.remove();
            const userEmail = document.cookie.split('=')[1].split(';')[0];
            this.login(userEmail);
        } else {
            this.signinBox.style.display = "block";
            this.postForm.style.display = "none";
        }
    }

    static login(email){
        API.loginUser(email).then(
            user => {
                if (user.error) {
                    const error = document.getElementById('status')
                    error.innerText = "Email not found.";
                    error.style.color = "Red";
                } else {
                    this.postForm.style.display = "block";
                    this.signInForm.style.display = "none";
                    UserForm.currentUser = new User(user);
                }
            }
        );
    }

    static createUser(){
        this.createBtn.addEventListener('click', e => {
            e.preventDefault();
            this.signinBox.style.display = "none";
            this.signupBox.style.display = "block";
        });
    }

    static signup(){
        
        this.signupForm.addEventListener('submit', e => {
            e.preventDefault();
            const f_name = this.signupForm.f_name.value;
            const l_name = this.signupForm.l_name.value;
            const email = this.signupForm.email.value;
            const location = this.signupForm.location.value;
            const tagline = this.signupForm.tagline.value;
            
            const storageRef = firebase.storage().ref();

            // Create a reference to 'images/mountains.jpg'
            const profileImagesRef = storageRef.child(`profileImages/${email}.jpg`);
            const imageInput = document.querySelector('#file')
            const imageFile = imageInput.files[0]

            profileImagesRef.put(imageFile).then(function(snapshot) { 
                snapshot.ref.getDownloadURL().then(url => {
                    const newUser = {f_name, l_name, email, location, tagline, image: url};

                    API.createUser(newUser)
                        .then(user => {
                            //debugger;
                            UserForm.login(user.email)}
                            );

                });
            });
        });
    }

    static signin(){
        this.signInForm.addEventListener('submit', e => {
            debugger
            e.preventDefault();
            const emailAdd = this.signInForm.email.value;
            this.login(emailAdd);
        });
    }

    static readURL(input) {
        if (input.files && input.files[0])
         {
            var reader = new FileReader();
            reader.onload = function (e) { 
                document.querySelector('#image-preview').src = e.target.result; 
            };
            reader.readAsDataURL(input.files[0]);
        }
    }

    static currentuser() {
        return this.currentUser;
    }
}

UserForm.init();