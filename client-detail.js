
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


 axios.get(`http://localhost:8000/api/assurances/`,


)
    .then((res) => {
        const resData = res.data;

        const data=resData.find((item)=>item.clientID===id
        )
        
        console.log(data);

        


        
   const assurences = document.getElementById("table");
   let table=
   
   `<thead class="">
   <tr>
     <th scope="col">Pojištění</th>
     <th scope="col">Částka</th>
     <th scope="col"></th>

   </tr>
 </thead>
    
      <tbody id="tbody" class="w-auto"
      < id="tbody" class="w-auto">
    <tr id="">
      <td data-label="Jméno a příjmeni"><a href="#">${data.type}</a></td>
      <td data-label="telefon">${data.price}</td>
      <td data-label="button"><button type="button" class="mr-2 btn btn-danger">Odstranit</button><button type="button" class="  btn btn-warning">Editovat</button></td>
    </tr>
      `
        
            
    table += `</tbody>
                </table>`;
                assurences.innerHTML = table; 



}

)

     const postBtn = document.getElementById("btnPost");
     console.log(postBtn);

creatAssurences=()=>{
        postBtn.addEventListener("click", () => {
       
       console.log(id);
    window.location.href = `http://127.0.0.1:5500/edit-assurences.html?=${id}`;
 });
}

creatAssurences();          

