let express = require("express");
let app = new express();

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.c1o0umomwvoq.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "adminadmin",
  database:"paradise-concerts",
  port: 3306,
 },
});

app.get("/",(req,res) => {
 knex
 .select()
 .from("venues")
 .then((result) => {
  let html = "<body><ul>";
  for (let i=0; i < result.length; i++) {
    html += "<li>" + result[i].location + "</li>";
  }
  html += "</ul></body>"
  res.send(result);
 });
});
app.listen(3000);
