let id = "";
let listSelectedUser = [];
let listUsers = [];

const addListSelected = (customer) => {
  const checkboxValue = document.getElementById(`checkbox1${customer}`).checked;
  if (checkboxValue) {
    listSelectedUser = listSelectedUser.concat(value);
    console.log("data", value);
  } else {
    listSelectedUser = listSelectedUser.filter((customer) => customer !== value);
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
