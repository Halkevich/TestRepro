async function  getData(){
    let apiUser = [];
    await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => json.map(data =>apiUser.push(data)))
        //return (console.log(apiUser))
       // return (console.log(apiUser))
       apiUser =  apiData(apiUser)
       return apiUser
          
    }

  function apiData(data) {
        return data.map(d => {
            let {name, email, address:{city}, phone} = d;
            return {name, email, city, phone}
        })
    }