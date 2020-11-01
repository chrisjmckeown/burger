const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgers_controller');
const moment = require('moment');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({
    defaultLayout: "main",
    helpers: {
        prettifyDate: (timestamp) => moment(timestamp).format('DD/MM/YYYY h:mm:ss')
    }
}));
app.set("view engine", "handlebars");

// set routes
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});
