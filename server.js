const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const PORT = process.env.PORT || 3001;
const app = express();
const user = require('./routes/user')
var dbConnection = require("./db");

mongoose.connect(process.env.MONGODB_URI || "mongodb://ajsmith7:Futo1234!@ds341825.mlab.com:41825/heroku_7kchmtpr");

app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
	session({
		secret: 'fraggle-rock', 
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, 
		saveUninitialized: false 
	})
)

app.use(passport.initialize())
app.use(passport.session())

app.use('/user', user)

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

var syncOptions = {
  force: false
};

if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
