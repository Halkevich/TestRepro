class User{
    constructor(data) {
       if(data.name.length > 0 && data.email.length > 0 && data.address.length > 0 && data.tel.length > 0) 
       this.data = data;
    }

    edit(data) {
        Object.assign(this.data, data)
    }
}

class Contacts {

constructor() {
    this.userId = 0
    this.contacts = [];
 }


 
 add(data) {
    if(data.name.length > 0 && data.email.length > 0 && data.address.length > 0 && data.tel.length > 0)  {
       ++this.userId;
        let user = new User(data);
        user.data.id = this.userId;
        //user.edit({id: this.userId})
        this.contacts.push(user)
   }
}

edit (id, data) {
    let userFind = this.contacts.find(user => {
        if(user.data.id == id) return user
    })

    userFind.edit(data);
}

remove(id) {
    this.contacts = this.contacts.filter(user => user.data.id != id ? user : null)
    return true;
    //console.log(this.contacts)
}

getContacts() {
    return this.contacts;
}

}

class ContactsApp extends Contacts{  //наследование из базового класса
    constructor() {
        super();
        this.init();
    }


    async getData(){
        // let apiUser = [];
        await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                json.map(data => {
                    let {name, email, address:{city:address}, phone:tel} = data;
                    this.add({name, email, address, tel})
                });
            });    
            
        }


    async init() {
          //await this.getData()
            console.log(this.contacts)
    
     
    let formContacts = document.createElement('form');
    formContacts.setAttribute('class', 'cont_form');

    let contactTitle = document.createElement('h1');
    contactTitle.setAttribute('class', 'cont_title');   /////
    contactTitle.innerText = 'My contacts'

    let contName = document.createElement('input');
    contName.setAttribute('type', 'text');
    contName.setAttribute('name', 'name');
    contName.setAttribute('class', 'cont_text_name');   /////
    contName.setAttribute('placeholder', 'Name');      


    let contEmail = document.createElement('input');
    contEmail.setAttribute('type', 'email');
    contEmail.setAttribute('name', 'email');
    contEmail.setAttribute('class', 'cont_text_email');   ////
    contEmail.setAttribute('placeholder', 'Email');   


    let contAddress = document.createElement('input');
    contAddress.setAttribute('type', 'text');
    contAddress.setAttribute('name', 'address');
    contAddress.setAttribute('class', 'cont_text_address');   /////
    contAddress.setAttribute('placeholder', 'Address');  


    let contPhone = document.createElement('input');
    contPhone.setAttribute('type', 'tel');
    contPhone.setAttribute('name', 'tel');
    contPhone.setAttribute('class', 'cont_text_tel');   ////
    contPhone.setAttribute('placeholder', 'Phone');   


    let formButton = document.createElement('button');
    formButton.setAttribute('type', 'submit');
    formButton.setAttribute('class', 'cont_button_submit');  ////
    formButton.innerText = 'Save contact';   ////


    let contList = document.createElement('ol');
    contList.setAttribute('class', 'cont_list');    ///
    this.contList = contList;     //1:24

    
    formContacts.append( contName, contEmail,  contAddress, contPhone, formButton);

    document.body.append(contactTitle, formContacts, contList);


    this.textInputs = [contName, contEmail, contAddress, contPhone];

    formContacts.addEventListener('submit', (e) => {
        this.addContact(e)
    })

    let cookie = this.getCookie('contExp')

    if(!cookie) {
        this.storage = [];
    }

    let dataStorage = this.storage;

        if (dataStorage) {
            dataStorage.forEach(elem => this.add(elem.data))
        }

        if (!dataStorage.length) {
            await this.getData()
        }


    
         this.createCont();
    
    
        //if(dataStorage = []) this.contacts = api
        //this.getData()
    //             localStorage.setItem('user', JSON.stringify(data));
    //             let {name, email, address:{city}, phone} = data;
    //             listName.innerText = name;
    //             listEmail.innerText = email;
    //             listAddress.innerText = city;
    //             listPhone.innerText = phone;
    
    }


    addContact(e) {
        e.preventDefault();
        let data = this.textInputs.reduce((obj, elem) => ({...obj, [elem.name]:elem.value}),{})   ///??????
        //console.log(data);
        this.add(data);
        this.textInputs.forEach(elem => elem.value = '') //очищает инпут после отправки
        console.log(this);
        console.log(this.contacts);
        this.createCont();
    }


    createCont() {
        this.contList.innerHTML = '';
        //let dataStorage = this.storage;
        let dataList = this.getContacts();

        // if(dataStorage) {
        //     this.contacts = dataStorage;
        // }

        //let dataList = this.getContacts();

        dataList.map(elem => {
            let elemList = document.createElement('li');
            elemList.setAttribute('class', 'cont_list_item');
    
            let listName = document.createElement('div');
            listName.setAttribute('class', 'cont_list_item_name');
            listName.innerText ='Name: '+ elem.data.name;
    
            let listEmail = document.createElement('div');
            listEmail.setAttribute('class', 'cont_list_item_email');
            listEmail.innerText = 'Email: ' + elem.data.email;
    
            let listAddress = document.createElement('div');
            listAddress.setAttribute('class', 'cont_list_item_address');
            listAddress.innerText ='Address: ' + elem.data.address;
    
            let listPhone = document.createElement('div');
            listPhone.setAttribute('class', 'cont_list_item_tel');
            listPhone.innerText = 'Phone: ' + elem.data.tel;
    
            let editBtn = document.createElement("button");
            editBtn.setAttribute('class', 'cont_list_item_edit');
            editBtn.innerText = 'Edit'
    
            let removeBtn = document.createElement("button");
            removeBtn.setAttribute('class', 'cont_list_item_remove');
            removeBtn.innerText = 'Delete';
    
            elemList.append(listName, listEmail, listAddress, listAddress, listPhone, editBtn, removeBtn)
            this.contList.append(elemList);
    
    
            editBtn.addEventListener('click', _ => {
                this.editCont(listName, listEmail, listAddress, listPhone)
            })
    
            removeBtn.addEventListener('click', _ => this.contRemove(elem.data.id))
    
            listName.addEventListener('keydown', e => {
                this.saveNote(e, elem.data.id, listName, listEmail, listAddress, listPhone)
            })
    
            listEmail.addEventListener('keydown', e => {
                this.saveNote(e, elem.data.id, listName, listEmail, listAddress, listPhone)
            })
    
            listAddress.addEventListener('keydown', e => {
                this.saveNote(e, elem.data.id, listName, listEmail, listAddress, listPhone)
            })
    
            listPhone.addEventListener('keydown', e => {
                this.saveNote(e, elem.data.id, listName, listEmail, listAddress, listPhone)
            })
        
        })

        this.storage = this.contacts;
        this.setCookie('contExp', 1, {'max-age':10})

        if(!this.storage) this.contacts = api
    }

    get storage() {
        let storage = localStorage.getItem('contacts');
        return JSON.parse(storage)
    }

    set storage(data) {
        let dataStorage = JSON.stringify(data)
        localStorage.setItem('contacts', dataStorage)
    }


    
    editCont = function (name, email, address, tel) {
            name.setAttribute('contenteditable', 'true');
            email.setAttribute('contenteditable', 'true');
            address.setAttribute('contenteditable', 'true');
            tel.setAttribute('contenteditable', 'true')
        }

    saveNote(e, id, name, email, address, tel){
        if(e.key == 'Enter'){
            name.setAttribute('contenteditable', 'false');
            email.setAttribute('contenteditable', 'false');
            address.setAttribute('contenteditable', 'false');
            tel.setAttribute('contenteditable', 'false');
            let data = {
                name: name.innerText,
                email: email.innerText,
                address: address.innerText,
                tel: tel.innerText,
            }
    
            this.edit(id, data);  //c 37 стр
            console.log(this.contacts)
        }
        this.storage = this.contacts
    }


    contRemove(id) {
        this.remove(id);
        this.createCont();
        //console.log(this.contacts)
    }


    //Готовое решение куки с https://learn.javascript.ru/cookie
    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + 'contExp'.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }


     setCookie(name, value, options = {}) {

        options = {
          path: '/',
          // при необходимости добавьте другие значения по умолчанию
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