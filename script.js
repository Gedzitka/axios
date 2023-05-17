const form = document.getElementById('client-form')
console.log(form);
form.addEventListener('submit', (e) => {
     e.preventDefault()
     ;
     const data = new FormData(form)
     const dataForm=[...data]
     const dataEteries = JSON.stringify(Object.fromEntries(dataForm))
     console.log(dataEteries);

    ;
     
    axios({
        method: "post",
        url: "http://localhost:8000/api/clients",
        data: dataEteries,
        headers: { "Content-Type": "application/json" }
        
    }
    
    )
        .then((res) => 
            console.log(res + "klient přidán"))
            .catch((err) =>
            console.log(err));
      });
            




    
 


// axios.get("http://localhost:8000/api/clients")
// .then((res) => 
//     console.log(res + "klienti"))
// .catch((err) =>
//     console.log(err));



//     axios.post("http://localhost:8000/api/clients", {
//         firstName:"jakub",
//         lastName:"pepa",
//         email:"j@seznam.cz",
//         phone:"123456789",
//         streetNumber:"zlatá 1",
//         city:"Praha",
//         posteNumber: "12345",

//     })
    
//     .then((res) => 
//     console.log(res + "klient přidán"))
// .catch((err) =>
//     console.log(err));
    
//     axios.put("http://localhost:8000/api/clients/645d2274d2964af84dd3b08b", {
//         firstName:"zdenek",
//         lastName:"vitek",
//         email:"j@seznam.cp",
//         phone:"123456788",
//         streetNumber:"zlatá 6",
//         city:"Praha 1",
//         posteNumber: "12349",

//     })
    

    
//     .then((res) => 
//     console.log(res + "klient upraven"))
// .catch(error => console.error('Error:', error));
//     axios.delete("http://localhost:8000/api/clients/645ac5014c2757e6a4845dd7", )
    
//     .then((res) => 
//     console.log(res + "klient smazán"))
// .catch((err) =>
//     console.log(err));

   


