//dependencies to install

var express = require("express");
var path = require("path");

//express app

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//enter variables for objects here. should include name, phone #, email, unique ID

var customers = [
    {
        name: " ",
        phone: " ",
        email: " ",
        ID: " "
    }
]

//send user to the ajax page

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "one.html"));
});

app.get("/two", function (req, res) {
    res.sendFile(path.join(__dirname, "two.html"));
});

//display all reservations

app.get("/api/customers/:custommer", function (req, res) {
    var chosen = req.params.customer;

    console.log(chosen);

    for (var i = 0; i < customers.length; i++) {
        if (chosen === customers[i].routeName) {
            return res.json(customers[i]);
        }
    }
    return res.json(false);
});

//create new reservations

app.post("/api/customers", function (req, res) {
    var newcustomer = req.body;

    newcustomer.routeName = newcustomer.name.replace(/\s+/g, "").toLowerCase();

    console.log(newcustomer);

    customers.push(newcustomer);

    res.json(newcustomer);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});