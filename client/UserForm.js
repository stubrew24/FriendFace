class UserForm {

    static init(){
        this.el = document.querySelector("#user-form")
        addCreateEvent()
    }

    static addCreateEvent(){
        this.el.addEventListener("submit", event => this.handleCreate(event))
    }

    static handleCreate(event){
        event.preventDefault()

        const f_name = this.el.f_name.value;
        const l_name = this.el.l_name.value;
        const image = this.el.image.value;
        const tagline = this.el.tagline.value;
        const location = this.el.location.value;
        const email = this.el.email.value;
    }
}

UserForm.init()