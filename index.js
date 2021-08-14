let express = require('express')
let mongoose = require('mongoose');

let app = express();
let apiRoutes = require("./router/routes")

const dbPath = 'mongodb://localhost:27017/Jetatech';
const options = { useNewUrlParser: true, useUnifiedTopology: true }
const mongo = mongoose.connect(dbPath, options);

mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
});
var db = mongoose.connection;

if (!db)
    console.log("Error connecting db");
else
    console.log("DB Connected Successfully");

var port = process.env.PORT || 8080;
app.use(express.json())

app.get('/', (req, res) => res.send('Welcome to Express'));
app.use('/api', apiRoutes)
app.listen(port, function () {
    console.log("Running FirstRest on Port " + port);
});