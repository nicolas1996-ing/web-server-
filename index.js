// webserver: deploy static web sites
require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`app listening on PORT ${PORT}`);
});

// ------------deploy static web sites------------

// ----------------------hbs----------------------
/*
 * hbs: renderizar vistas html, reutlizar código, envio de argumentos
 */
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {
  console.log(err);
});

// ------------------middlewares------------------
// path: localhost:3005/ ::: respose:
app.use(express.static("public")); // content front-end - content static -- index.html - nos permite renderizar contenido html
// ---------------------routes--------------------
// -----------------------------------------------

app.get("/", (req, res) => {
  res.render("home", {
    name: "Nicolas Aristizabal Ramirez",
    title: "nodeJs course",
  });
  /*
    * res.sender(vista,{argumentos})
    * uso de hbs: nos permite re-utilizar código html asociadao al home.html
    * envio de información desde el controlador hacia la vista
    * los argumentos pueden ser usados por la vista 
    <title>{{title}}</title>
  */
});

app.get("/generic", (req, res) => {
  res.render("generic");
  // res.sendFile(__dirname + "/public/generic.html"); // static content
});

app.get("/elements", (req, res) => {
  res.render("elements");
  // res.sendFile(__dirname + "/public/elements.html"); // static content
});

// route no found
// importan to front-end
app.get("*", (req, res) => {
  res.render("404");
  // res.sendFile(__dirname + "/public/404.html"); // content static
});

app.use("*", (req, res) => {
  res.render("home", {
    name: "Nicolas Aristizabal R.",
    title: "nodeJs course",
  });
});
