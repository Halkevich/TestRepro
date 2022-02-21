
function delivery() {
    let fieldName = null;
    let fieldPhone = null;
    let fieldEmail = null;
    let fielDeliveryMethods = null;
    let fieldDateCurrent = null;
    let fiedDistA = null;
    let fiedDistB = null;
    let fiedDateDeparture = null;
    let fiedDateDelivery = null;

    let dataArray = [ fieldName,  fieldPhone,  fieldEmail,  fielDeliveryMethods,  fieldDateCurrent,  fiedDistA,  fiedDistB,   fiedDateDeparture,  fiedDateDelivery]


         let distances = [
            {
                a: 'Минск',
                b: 'Гомель',
                d: 313
            },
            {
                a: 'Минск',
                b: 'Брест',
                d: 548
            },
            {
                a: 'Минск',
                b: 'Могилев',
                d: 198
            },
            {
                a: 'Минск',
                b: 'Витебск',
                d: 290
            },
            {
                a: 'Минск',
                b: 'Гродно',
                d: 278
            },
    
    
            {
                a: 'Гомель',
                b: 'Минск',
                d: 313
            },
            {
                a: 'Гомель',
                b: 'Брест',
                d: 530
            },
            {
                a: 'Гомель',
                b: 'Могилев',
                d: 183
            },
            {
                a: 'Гомель',
                b: 'Витебск',
                d: 337
            },
            {
                a: 'Гомель',
                b: 'Гродно',
                d: 595
            },
    
    
            {
                a: 'Могилев',
                b: 'Минск',
                d: 198
            },
            {
                a: 'Могилев',
                b: 'Брест',
                d: 534
            },
            {
                a: 'Могилев',
                b: 'Гомель',
                d: 183
            },
            {
                a: 'Могилев',
                b: 'Витебск',
                d: 161
            },
            {
                a: 'Могилев',
                b: 'Гродно',
                d: 481
            },
    
    
    
            {
                a: 'Витебск',
                b: 'Минск',
                d: 290
            },
            {
                a: 'Витебск',
                b: 'Брест',
                d: 630
            },
            {
                a: 'Витебск',
                b: 'Гомель',
                d: 337
            },
            {
                a: 'Витебск',
                b: 'Могилев',
                d: 161
            },
            {
                a: 'Витебск',
                b: 'Гродно',
                d: 569
            },
    
    
            {
                a: 'Гродно',
                b: 'Минск',
                d: 278
            },
            {
                a: 'Гродно',
                b: 'Брест',
                d: 238
            },
            {
                a: 'Гродно',
                b: 'Гомель',
                d: 595
            },
            {
                a: 'Гродно',
                b: 'Могилев',
                d: 481
            },
            {
                a: 'Гродно',
                b: 'Витебск',
                d: 569
            },
    
            {
                a: 'Брест',
                b: 'Минск',
                d: 548
            },
            {
                a: 'Брест',
                b: 'Витебск',
                d: 630
            },
            {
                a: 'Брест',
                b: 'Гомель',
                d: 530
            },
            {
                a: 'Брест',
                b: 'Могилев',
                d: 534
            },
            {
                a: 'Брест',
                b: 'Гродно',
                d: 238
            }
    
        ]
    
let prices = [
    {
        method: 'самолет',
        price: 300
    },
    {
        method: 'такси',
        price: 200
    },
    {
        method: 'частный водитель',
        price: 150
    },
    {
        method: 'курьер',
        price: 100
    },
]


function showForm(){
    let doc = document;
      let deliveryMethod = ['самолет', 'такси', 'частный водитель', 'курьер'];
      let destantions = ['Брест', 'Гродно', 'Гомель', 'Могилев','Минск','Витебск'];

     let formа = doc.createElement('form');
     formа.setAttribute('class', 'main-form'); 
    
    
     let fio = doc.createElement('input');
        fio.setAttribute('type', 'text');
        fio.setAttribute('class', 'inputs');
        fio.setAttribute('placeholder', 'ФИО');
        fio.setAttribute('name', 'fio');
        fio.required = 'true';
     

        let phone = doc.createElement('input');
        phone.setAttribute('type', 'tel');
        phone.setAttribute('class', 'inputs');
        phone.setAttribute('placeholder', 'Телефон');
        phone.setAttribute('name', 'tel');
        phone.required = 'true';


        let mail = doc.createElement('input');
        mail.setAttribute('type', 'email');
        mail.setAttribute('class', 'inputs');
        mail.setAttribute('placeholder', 'email');
        mail.setAttribute('name', 'email');
        mail.required = 'true';
        

   

        let now = doc.createElement('input');
        now.setAttribute('type', 'datetime');
        now.setAttribute('class', 'inputs');
        now.setAttribute('name', 'now');
        let nowDay = new Date();
        now.value = ` ${nowDay.getFullYear()} / ${nowDay.getMonth() + 1} / ${nowDay.getDate()}  ${nowDay.getHours() } : ${nowDay.getMinutes()} : ${nowDay.getSeconds()}`
      


        let deperture = doc.createElement('select');
            deperture.setAttribute('class', 'inputs');
            deperture.setAttribute('name', 'deperture');
            deperture.required = 'true'

            let typeDelivery = doc.createElement('select');
            typeDelivery.setAttribute('class', 'inputs');
            typeDelivery.setAttribute('name', 'typeDelivery');
            typeDelivery.required = 'true';


         let typeDeliveryOptions = createElements(deliveryMethod);
            typeDeliveryOptions.map(option => {
            typeDelivery.append(option);    
        });


            let destantion = doc.createElement('select');
            destantion.setAttribute('class', 'inputs');
            destantion.setAttribute('name', 'destantion');
            destantion.required = 'true';


        // почему не createSelects??
        let optionDestantion = createElements(destantions);
            let optionDeperture = createElements(destantions);
            optionDeperture.map(option => {
            deperture.append(option);
        });

        
        optionDestantion.map(option => {
        destantion.append(option)
       });


        let dateDeparture = doc.createElement('input');
        dateDeparture.setAttribute('type', 'date');
        dateDeparture.setAttribute('class', 'inputs');
        dateDeparture.setAttribute('name', 'dateDeperture');
        dateDeparture.required = 'true';


    

        let dateDeliver = doc.createElement('input');
        dateDeliver.setAttribute('type', 'date');
        dateDeliver.setAttribute('class', 'inputs');
        dateDeliver.setAttribute('name', ' dateDelivery');
        dateDeliver.required = 'true';
    


        let button = doc.createElement("button");
        button.setAttribute('type', 'submit');
        button.setAttribute('class', 'button-submit');
        button.innerText ="расчитать стоимость";
        formа.addEventListener ('submit', (e) => {
            formHandler(e, formа, deperture, destantion);

        });

       formа.append(fio, phone, mail,  now, typeDelivery, deperture, destantion, dateDeparture, dateDeliver, button );

       doc.body.appendChild(formа);


        function createElements(data){
            return data.map(elem =>{
                let option  = doc.createElement('option');
                option.setAttribute('value', elem);
                option.innerText = elem;
                return option;
            })
            
            } 

            function formHandler(e, conteiner, dep, dest) {
                e.preventDefault();
                if (dep.value == dest.value) return
                [...conteiner.children].map((elem, i ) => {
                    if(elem.tagName != 'BUTTON') dataArray[i] = elem.value;
                });
                [fieldName, fieldPhone, fieldEmail, fielDeliveryMethods, fieldDateCurrent, fiedDistA, fiedDistB, fiedDateDeparture, fiedDateDelivery] = dataArray;
                console.log(dataArray);
                let price = culculation()
                showCalculation(price)
            }

    
    function culculation() {
        let distA = fiedDistA,
            distB = fiedDistB,
            method = fielDeliveryMethods;
        let dist = distances.find(elem => {
            if ((elem.a == distA || elem.b == distA ) && (elem.a == distB || elem.b == distB)) {
                return elem;
            }  
        })
        let coof = prices.find(elem => elem.method == method ? elem : null)
        return dist.d * coof.price
    }
  
    function showCalculation(price) {
        if (doc.body.lastChild.className != 'price') {
            let Finaly = doc.createElement('div');
            Finaly.setAttribute('class', 'price');
            Finaly.innerText = `Стоимость доставки ${price}`;

            doc.body.append(Finaly);
        } else {
            doc.body.lastChild.innerText = `Стоимость доставки ${price}`;
        }
        
    }
}
showForm() 
 
}

    window.addEventListener('DOMContentLoaded', delivery);




 





