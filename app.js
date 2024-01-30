const express = require("express");
const app = express();
const port = 8080; // listen Node js localhost port

// Serve Static Files
app.use(express.static("public"));
app.use("/pageAccessFiles", express.static("public")); // need only access static pages to ejs UI pages

// template view engine
app.set("view engine", "ejs");

// Set the json request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const subscriberRouter = require("./routers/subscriber");
const publisherRouter = require("./routers/publisher");

app.get("/", function(req, res){
  res.send("MQTT App.js start...");
});




app.use("/subscriber", subscriberRouter);
app.use("/publisher", publisherRouter);

app.listen(port,function(){
  console.log('node server is started')
})