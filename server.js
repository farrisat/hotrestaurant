
// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Empty Array

var reservations = [];
var waitlistArray = [];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
// Make Reservations
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all reservation requests
app.get("/tables", function(req, res) {
  return res.json(reservations);
});



// -----------Waitlist Routes_____________
app.get("/reservations/:reservation"), function(req,res)
 {

 }


// Create New Rservations- takes in JSON input
app.post("/reserve", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter don't need to remove spaces
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  if (reservations.length<5) {
       reservations.push(newReservation);  
       res.json(newReservation);     
  }

  else{

  waitlistArray.push(newReservation);
  res.json(newReservation);
  }
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
