class User {
    constructor (data){
        if (data.name.length > 0 && data.email.length > 0 && data.address.length > 0  && data.tel.length > 0)  this.data = data;
    }
    edit(data){
        Object.assign(this.data, data)
    }
}

class Contact {
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


class ContactApp extends Contact{  
        constructor() {
            super();
            this.init();
        }

    

    init(){


        let dataStorage = this.storage;

        if (dataStorage) {
            dataStorage.forEach(elem => this.add(elem.data))
   
        }
        let formContact = document.createElement('form');
        formContact.setAttribute('class', 'user_form');
    
        let infoTitle = document.createElement('h1');
        infoTitle.setAttribute('class', 'note_title');
        infoTitle.innerText = 'My phonebook'
    
    
        let textInfoName = document.createElement('input');
        textInfoName.setAttribute('type', 'text');
        textInfoName.setAttribute('name', 'name');
        textInfoName.setAttribute('class', 'info_text_title');
        textInfoName.setAttribute('placeholder', 'Name');
    
        let textInfoEmail = document.createElement('input');
        textInfoEmail.setAttribute('type', 'email');
        textInfoEmail.setAttribute('name', 'email');
        textInfoEmail.setAttribute('class', 'info_email_title');
        textInfoEmail.setAttribute('placeholder', 'Email');
    
    
    
        let textInfoAddress = document.createElement('input');
        textInfoAddress.setAttribute('type', 'text');
        textInfoAddress.setAttribute('name', 'address');
        textInfoAddress.setAttribute('class', 'address_text_title');
        textInfoAddress.setAttribute('placeholder', 'Address');
    
        let textInfoPhone = document.createElement('input');
        textInfoPhone.setAttribute('type', 'tel');
        textInfoPhone.setAttribute('name', 'tel');
        textInfoPhone.setAttribute('class', 'num_text_title');
        textInfoPhone.setAttribute('placeholder', 'Tel');
    
    
        let formButton = document.createElement('button');
        formButton.setAttribute('type', 'submit');
        formButton.setAttribute('class', 'write_button_submit');
        formButton.innerText = 'Save note';
    
    
        formContact.append (infoTitle,textInfoName, textInfoEmail, textInfoAddress, textInfoPhone, formButton);
    
        let notesList = document.createElement('ul');
        notesList.setAttribute('class', 'note_list');
        this.notesList = notesList;
    
        document.body.append(formContact, notesList);
    
        this.textInputs = [textInfoName, textInfoEmail, textInfoAddress, textInfoPhone,];
    
        formContact.addEventListener('submit', (e) => {
            this.addContact(e)
        })

        this.createContact();
    }

    
    addContact(e){
        e.preventDefault();
        let data = this.textInputs.reduce((obj, elem) => ({...obj, [elem.name]:elem.value}),{})
        console.log(this);
        this.add(data);
        this.textInputs.forEach(elem => elem.value = '')
        this.createContact();
        console.log(this.notes);
    }

        createContact(){
            this.notesList.innerHTML = '';
            // let dataStorage = this.storage;
            let dataList = this.getContact();
            // if(dataStorage){
            //     this.notes = dataStorage
            // }

            // let dataList = this.getContact();


            dataList.map(elem =>{
        let elemList = document.createElement('li');
        elemList.setAttribute('class', 'user_list_item');

        let listName = document.createElement('div');
        listName.setAttribute('class', 'user_list_item_name');
        listName.innerText ='Name '+ elem.data.name;

        let listEmail = document.createElement('div');
        listEmail.setAttribute('class', 'user_list_item_email');
        listEmail.innerText = 'Email ' + elem.data.email;

        let listAddress = document.createElement('div');
        listAddress.setAttribute('class', 'user_list_item_address');
        listAddress.innerText ='Address '+ elem.data.address;

        let listTel = document.createElement('div');
        listTel.setAttribute('class', 'user_list_item_tel');
        listTel.innerText = 'Tel ' + elem.data.tel;

        let editButton = document.createElement('button');
        editButton.setAttribute('class', 'user_list_item_edit');
        editButton.innerText = 'Edit'

        let removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'user_list_item_remove');
        removeButton.innerText = 'X';
        elemList.append(listName, listEmail,listAddress,listTel,editButton, removeButton)
        this.notesList.append(elemList);


        editButton.addEventListener('click', _ => {
            this.editUser(listName, listEmail, listAddress,  listTel)
        })

        removeButton.addEventListener('click', _ => this.userRemove(elem.data.id))

        listName.addEventListener('keydown', e => {
            this.saveUser(e, elem.data.id, listName, listEmail,  listAddress,   listTel)
        })

        listEmail.addEventListener('keydown', e => {
            this.saveUser(e, elem.data.id, listName, listEmail,listAddress,   listTel)
        })

        listAddress.addEventListener('keydown', e => {
            this.saveUser(e, elem.data.id, listName, listEmail,listAddress,   listTel)
        })

        listTel.addEventListener('keydown', e => {
            this.saveUser(e, elem.data.id, listName, listEmail,listAddress,  listTel)
        })
    })

    this.storage = this.notes;
    this.setCookie('notesExp', 1, {'max-age': 10} )
}



   get storage(){
       let storage = localStorage.getItem('notes');
       return JSON.parse(storage)

   }

    set storage (data){
    let dataStorage = JSON.stringify(data)
    localStorage.setItem('notes', dataStorage)
}





saveUser(e, id, name, email, address, tel){
    if(e.key == 'Enter' && e.ctrlKey){
        name.setAttribute('contenteditable', 'false');
        email.setAttribute('contenteditable', 'false');
        address.setAttribute('contenteditable', 'false');
         tel.setAttribute('contenteditable', 'false');
        let data = {
            name: name.innerText,
            email: email.innerText,
            address: name.innerText,
            tel: email.innerText
        }
        this.edit(id, data);
        
     
    }
  this.storage =this.notes;
  
}
 




    userRemove(id){
        this.remove(id);
        this.createContact();
    }

    

    editUser(name, email, address, tel){
        name.setAttribute('contenteditable', 'true');
        email.setAttribute('contenteditable', 'true');
        address.setAttribute('contenteditable', 'true');
        tel.setAttribute('contenteditable', 'true');
    }



    
getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

setCookie(name, value, options = {}) {

    options = {
      path: '/',
    
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }
 
     
    }