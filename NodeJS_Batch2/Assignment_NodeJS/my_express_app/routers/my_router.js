const express = require("express");

const myRouter = express.Router();
//router handlers
myRouter.get("/get", async (req, res) => {
  try {
    const response = await fetch("https://api.sampleapis.com/coffee/ho");
    const data = await response.json(); // Await the JSON conversion
    console.log(data); // Log the data to the console
    res.json(data); // Send the data as the response
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).send("An error occurred while fetching data."); // Send an error response
  }
});

myRouter.post("/profile", (req, res) => {
  res.send("Profile submitted successfully");
});

myRouter.put("/update-rofile", (req, res) => {
  res.send("Profile updated successfully");
});

myRouter.delete("/delete-profile", (req, res) => {
  res.send("Profile deleted successfully");
});

myRouter.get("/profile/:name/:age", (req, res) => {
  res.send(`Hello, ${req.params.name} you are ${req.params.age} years old`);
});

myRouter.get("/contact/:phone([0-9]{10})", (req, res) => {
  res.send(`Contact number: ${req.params.phone}`);
});
//default page
myRouter.get("*", (req, res) => {
  res.status(404).send("404: Page Not Found");
});

//export the router object
module.exports = myRouter;
