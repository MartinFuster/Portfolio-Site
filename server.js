require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();
const path = require("path");

// app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  let mailOptions = {
    from: process.env.EMAIL,
    to: process.env.SEND_TO,
    subject: "from " + name + ", email: " + email,
    text: message,
  };

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "Oauth2",
      user: process.env.EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN,
    },
  });

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(200);
    }
  });
});

// app.get("*", (req, res) => {
//  res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

app.listen(PORT, function () {
  console.log("App listening on port " + PORT);
});
