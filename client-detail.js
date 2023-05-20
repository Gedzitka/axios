
detailClient=()=>{
    const id=window.location.search.split('=')[1];
    console.log(id);
    if (id) {
        axios.get(`http://localhost:8000/api/clients/${id}`)
        .then((res) => {
            console.log(res.data);
            const client=res.data;
            console.log(client);
 
    const clientInfo = document.getElementById("clientInfo");

    clientInfo.innerHTML=` <ul class="ul ul-expand-md">
    <dt>${client.firstName} ${client.lastName}</dt>
    
    <dd>${client.streetNumber}</dd>
    <dd>${client.city}</dd>
    <dd>${client.posteNumber}</dd>
    </ul>

`

;
   const nextInfo = document.getElementById("nextInfo");
    nextInfo.innerHTML = `<ul>
    <dd>${client.email}</dd>
    <dd>${client.phone}</dd>
    </ul>
`;






}
)
.catch((err) =>
console.log(err));
}
}


detailClient();