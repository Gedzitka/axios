
axios.get(`http://localhost:8000/api/clients/`)
    
    .then((res) => {
        const data = res.data;




    const clientData = document.getElementById("table");
    let table = ` <thead class="thead-light">
    <tr>
      <th scope="col">Jméno</th>
      <th scope="col">Bydliště</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody id="tbody" class="w-auto"> `;
    for (let i = 0; i < data.length; i++) {
      table += `
      
      <tr id="${data[i]._id}">
      <td data-label="Jméno a příjmeni"><a href="client-detail.html">${data[i].firstName} ${data[i].lastName}</a></td>
      <td data-label="telefon">${data[i].streetNumber}, ${data[i].posteNumber}, ${data[i].city}</td>
      <td data-label="button"><button  type="button" class="mr-2 btn btn-danger">Odstranit</button><button type="button" class="  btn btn-warning">Editovat</button></td>
    </tr>
   
      `
        
       
                          
     
    //   deleteClient = (client) => {
      
      
    //     if (confirm('Opravdu chcete smazat klienta?')) {
    //       //   const id = id;
    //         console.log(client);
    //             axios.delete(`http://localhost:8000/api/clients/${client}`)
    
    //             .then(res => res.json())
    //             .then(client => console.log(client))
    //             .catch(error => console.error(error))
             
           
    //           }
              
    //             console.log(client);
            
    //         }
     
       
            }
      

   
    
    table += `</tbody>
                </table>`;
                clientData.innerHTML = table;
                const id = document.querySelector("tr");
                const deleteBtn = document.querySelectorAll(".btn-danger");
                if (deleteBtn) {
                    deleteBtn.forEach((btn) => {
                        btn.addEventListener("click", (e) => {
                            const id = e.target.parentElement.parentElement.id;
                            console.log(id);
                            if (confirm('Opravdu chcete smazat klienta?')) {
                                axios.delete(`http://localhost:8000/api/clients/${id}`)
                               
                                .then(client => console.log(client))
                                .then(() => location.reload())
                                
                                .catch(error => console.error(error))
                            }
                        });
                    });
                }

                console.log(id);

    })
   


    




    
        
            
        
            





        


    
   
   
    
    


    

      

    
 

   


// const deletebtm=document.getElementById('deleteBtn');

// console.log(deletebtm);
//  deletebtm.addEventListener('click', (e) => {


//     if (confirm('Opravdu chcete smazat klienta?')) {
//         const id = e.target.parentElement.parentElement.id;
//         console.log(id);
//         async function deleteClient(id) {

//           try {
//             const response = await fetch(`http://localhost:8000/api/clients/${id}`, {
//               method: 'DELETE',
//               headers: {
//                 'Content-Type': 'application/json'
//               }
//             });
//             const data = await response.json();
//             console.log(data);
//           } catch (error) {
//             console.log(error);
//           }
      
//     }


//     deleteClient(id);

// }
// }



// )
// }
// getUsers();
// async function deleteClient(id) {
//     try {
//       const response = await fetch(`http://localhost:8000/api/clients/${_id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
