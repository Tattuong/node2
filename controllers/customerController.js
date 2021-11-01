const { Customer, validate } = require("../models/customer");

const getAllCustomers = async (req, res, next) => {
  const list = await Customer.find().exec();
  
  res.render("customerlist", {
    customers: list,
  });
};

const getAddCustomerView = (req, res, next) => {
  res.render("addCustomer");
};


const addCustomer = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);
  const data = req.body;
  console.log(data)
  let customer = await new Customer({
    name: data.name,
    email: data.email,
    address: data.address,
    phone: data.phone,
  });
  customer = await customer.save();
  res.redirect("/");
};


const getUpdateCustomerView = async (req, res, next) => {
  try {
    const id = req.params.id;
    const onecustomer = await Customer.findById(id).exec();
    res.render("updateCustomer", {
      customer: onecustomer,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateCustomer = async (req, res, next) => {
  const { error } = validate(req.body);
  if (error) return res.status(422).send(error.details[0].message);
  const id = req.params.id;
  const data = req.body;
  let customer = await Customer.findByIdAndUpdate(
    id,
    {
      name: data.name,
      email: data.email,
      address: data.address,
      phone: data.phone,
    },
    { new: true }
  );
  if (!customer) return res.status(404).send(" not found");

  res.redirect("/");
};

const getDeleteCustomerView = async (req, res, next) => {
  try {
    const id = req.params.id;
    const onecustomer = await Customer.findById(id).exec();
    res.render("deleteCustomer", {
      customer: onecustomer,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findByIdAndRemove(id);
    if (!customer) return res.status(404).send("not found");
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
};


// const checkAllUsers = () => {
//   const checkboxValue = document.getElementById("selectAll").checked;
//   console.log(checkboxValue);
//   if (checkboxValue) {
//     listSelectedUser = getAllCustomers.map((list) => list.id);
//   } else {
//     listSelectedUser = [];
//   }
// };

// checkAllUsers()


// const DeleteAllCustom = async (req, res, next ) =>{ 
//     const id = req.params.id
//     const customer = await Customer.findOneAndRemove(id);
//     if (!customer) return res.status(404).send("not found")
// }

// const getpagination = {page, size} => {
// }

module.exports = {
  getAllCustomers,
  getAddCustomerView,
  addCustomer,
  getUpdateCustomerView,
  updateCustomer,
  getDeleteCustomerView,
  deleteCustomer,
};
