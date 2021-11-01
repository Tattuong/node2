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

const deleteCustomer = document.getElementById("deleteBtn")
deleteCustomer.addEventListener('click', (e) => {
    console.log('delete');
    listSelectedUser = listSelectedUser.map(() => { 
        return listSelectedUser ;
    })
    console.log(listSelectedUser);
})
