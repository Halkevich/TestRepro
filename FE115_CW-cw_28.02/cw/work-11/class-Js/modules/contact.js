// import Contact from "./contact.js";
import User from "./User.js"


 export default  class Contact {
    constructor(){

        this.userId = 0
        this.notes = [];
        
    }

    add(data){
        if (data.name.length > 0 && data.email.length > 0 && data.address.length > 0  && data.tel.length > 0) {
            ++this.userId;
            let user = new User(data);
            user.data.id = this.userId;
            // user.edit({id: this.userId})
            this.notes.push(user)
        }
    }


    edit(id, data){
        let userFind = this.notes.find(user =>{
            if (user.data.id == id)  return user
                
    })
        userFind.edit(data);
    }


    remove(id){
        this.notes = this.notes.filter(user => user.data.id !=id ? user : null)
    return true;
    }


    getContact(){
        return this.notes;
    }


} 
