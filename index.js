const express = require('express');
const cors = require('cors');
const path = require('path');
const expressLayoutes = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const err = require('./middleware/errors');
const customerRoutes = require('./routes/customer-routes');
const app = express();
const mongoose = require('mongoose')



const connectDb = async () => {
    try {
      await mongoose.connect("mongodb://localhost:27017/usermanagement2", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB connected");
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  };
  connectDb();


app.use(expressLayoutes);
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(customerRoutes.routes);
app.use(err);

const PORT = 3005;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
