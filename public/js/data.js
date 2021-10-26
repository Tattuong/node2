// render users
const url = "http://localhost:3000/api/products";

const addModalForm = document.querySelector(".form-user");
const editModalForm = document.querySelector("#editModal .form-user");
const deleteModalForm = document.querySelector("#deleteModal .form-user");
const tableUsers = document.querySelector("#table-user");


let id = "";
let page = 1
let listSelectedUser = [];
let listUsers = [];

const addListSelected = (value) => {
  const checkboxValue = document.getElementById(`checkbox1${value}`).checked;
  if (checkboxValue) {
    listSelectedUser = listSelectedUser.concat(value);
    console.log("data", value);
  } else {
    listSelectedUser = listSelectedUser.filter((user) => user !== value);
  }
};


const checkAllUsers = () => {
  console.log(listUsers);

  const checkboxValue = document.getElementById("selectAll").checked;
  console.log(checkboxValue);
  if (checkboxValue) {
    listSelectedUser = listUsers.map((user) => user.id);
  } else {
    listSelectedUser = [];
  }
};
//deleteUserCheckbox


const deleteAllUsers = () => {
  console.log(listSelectedUser);
  listSelectedUser.map((userId) => {
    fetch(`${url}/${userId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => fetchUsers());
  });
};


const fetchUsers = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      listUsers = data.slice(5 * page - 5, 5 * page);
      
      tableUsers.innerHTML = "";
      data.slice(5 * page - 5, 5 * page).map((user) => {
        renderUsers(user);
      });
    });
};

const renderUsers = (user) => {
  const output = `
        <tr data-id= '${user.id}'>
						<td>
							<span class="custom-checkbox">
									<input onchange="addListSelected(${user.id})" type="checkbox" id="checkbox1${user.id}" name="options[]" value="1">
								<label for="d
								checkbox1"></label>
							</span>
						</td>
						<td>${user.name}</td>
						<td>${user.email}</td>  
						<td>${user.address}</td>
						<td>${user.phone}</td>
						<td>
							<a href="#editModal" class="btn-edit"><i class="bi bi-pencil-fill" data-toggle="modal" title="Edit" style="font-size: 20px; color:#FFC107;"></i></a>
							<a href="#deleteModal" class="btn-del"><i class="bi bi-trash-fill" data-toggle="tooltip" title="Delete" style="font-size: 20px; color:red"	></i></a>
						</td>
					</tr>       
	`;
  tableUsers.insertAdjacentHTML("beforeend", output);

  const btnDel = document.querySelector(`[data-id = '${user.id}'] .btn-del`);
  btnDel.addEventListener("click", (e) => {
    e.preventDefault();
    id = user.id;
    $("#deleteModal").modal("show");
  });


  const btnEdit = document.querySelector(`[data-id = '${user.id}'] .btn-edit`);
  btnEdit.addEventListener("click", (e) => {
    e.preventDefault();
    id = user.id;
    $("#editModal").modal("show");

      editModalForm.name.value = user.name,
      editModalForm.email.value = user.email,
      editModalForm.address.value = user.address,
      editModalForm.phone.value = user.phone;
  });

};

deleteModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => fetchUsers());
});


//add
addModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: addModalForm.name.value,
      email: addModalForm.email.value,
      address: addModalForm.address.value,
      phone: addModalForm.phone.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const dataArr = [];
      dataArr.push(data);
      fetchUsers(dataArr);
    });
});

//edit

editModalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: editModalForm.name.value,
      email: editModalForm.email.value,
      address: editModalForm.address.value,
      phone: editModalForm.phone.value,
    }),
  })
    .then((res) => res.json())
    .then(() => fetchUsers());
});

fetchUsers();

