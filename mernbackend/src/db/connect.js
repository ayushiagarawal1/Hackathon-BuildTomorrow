const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Dharmi:yqnHL8G5@kvysbB@schemeland.4xq31.mongodb.net/SignUp?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => console.log("connection established succesfully!!"))
.catch((e) => console.log("no connection"));
