const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require('body-parser');

//need to parse the body of a request
app.use(bodyParser.json());

//importing the databaseController - acts as middleware
databaseController = require('./databaseController/Controller.js');

//We always render this page, no matter what- the rest of the routes just comprises the API
app.use(express.static(path.join(__dirname, './../client')));
//app.get('/', (req, res) => res.send('inconsequential because of express.static'))

//responds to the findAll button-- dumping all contents into the data div
app.get('/findAll', databaseController.findAll, (req, res, next) => {
	res.send(res.locals.databaseFindings);
});

//responds to the insertOne record
app.post('/insertOne', databaseController.insertOne, (req, res, next) => {
	res.send(res.locals.databaseFindings);
});

//queries for one record out of the db
app.post('/findOne', databaseController.findOne, (req, res, next) => {
	console.log('db', res.locals.databaseFindings);
	res.send(res.locals.databaseFindings);
});

//removes one record from the db
app.delete('/removeOne', databaseController.removeOne, (req, res, next) => {
	res.end();
});

//updates one selected record from the database
app.put('/updateOne', databaseController.updateOne, (req, res, next) => {
	res.send('updateOne via put');
});






app.listen(3000, () => console.log('Example app listening on port 3000!'))