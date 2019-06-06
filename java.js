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
];

//send user to the ajax page

app.get("/tables", function (req, res) {
    console.log(path.join(__dirname, "tables.html"));
    res.sendFile(path.join(__dirname, "tables.html"));
});

// app.get("/test", function (req, res) {
//     res.send("test");
// });

app.get("/reserve", function (req, res) {
    console.log(path.join(__dirname, "reserve.html"));
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// display all reservations

app.get("/api/customers/:customer", function (req, res) {
    var chosen = req.params.customer;

    console.log(chosen);

    for (var i = 0; i < customers.length; i++) {
        if (chosen === customers[i].routeName) {
            return res.json(customers[i]);
        }
    }
    res.json(false);
});

// create new reservations

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