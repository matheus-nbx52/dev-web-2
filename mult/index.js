const express = require("express");

const app = express();

app.get("/mult", (req, res) => {
    let op1 = req.query.opt1;
    let op2 = req.query.opt2;
    var multiplicacao = op1 * op2;
    res.send({multiplicacao});
  })


app.listen("5000", () => {
    console.log("inicio server");
  })