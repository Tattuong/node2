let listSelectedUser = [];


const deleteModalForm = document.querySelector("#deleteModal")
const listCheckbox = document.getElementsByClassName("checkbox-cus");

// console.log('listCheckbox', listCheckbox);

Array.from(listCheckbox).forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        console.log(e.target.id, e.target.checked);
        if (e.target.checked) {
            listSelectedUser.push(e.target.id)
        } else {
            listSelectedUser = listSelectedUser.filter(id => id !== e.target.id)
        }
        console.log('listSelectedUser', listSelectedUser);
    })
});


// function deleteAllCustomer(){

// }
 const deleteAllCustomer = () =>{
    
 }



