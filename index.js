/*
It's important that dotenv gets imported before the person model is imported. This ensures that the environment variables from the .env file are available globally before the code from the other modules is imported.
*/
// this is to use env variables in .env file
require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const app = express();
const Person = require('./models/person')

// allows apps from different ports to communicate with the server
app.use(cors());
// this is to make express shwo our front end production build
app.use(express.static('build'))
// we need this to parse JSON data in post requests
app.use(express.json())

// this will show data in http post requests
morgan.token('post', (req, res) => {
	// we use stringify so that it will display in the console as a string not object
	return JSON.stringify(req.body);
})
// morgan will log to the console requests that are made
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post'))

let persons = [
	{
		"id": 1,
		"name": "Arto Hellas",
		"number": "040-123456"
	},
	{
		"id": 2,
		"name": "Ada Lovelace",
		"number": "39-44-5323523"
	},
	{
		"id": 3,
		"name": "Dan Abramov",
		"number": "12-43-234345"
	},
	{
		"id": 4,
		"name": "Mary Poppendieck",
		"number": "39-23-6423122"
	}
]

app.get('/api/persons', (request, response) => {
	// search the database for all Person documents
	Person.find({}).then(people => {
		// send persons in json format
		response.json(people);
	})
})

app.get('/info', (request, response) => {
	let date = new Date()
	response.send(
		`<div>
			<p>Phonebook has info for ${persons.length} people</p>
			<p>${date}</p>
		</div>`
	)
})
// id is a param
app.get('/api/persons/:id', (request, response) => {
	// const id = Number(request.params.id)
	// // returns undefined if not found
	// const person = persons.find(person => person.id === id);
	// if (person) {
	// 	response.json(person);
	// } else {
	// 	// 404 not found
	// 	response.status(404).end()
	// }

	Person.findById(request.params.id).then(person => {
		response.json(person);
	})
})

app.delete('/api/persons/:id', (req, res) => {
	const id = Number(req.params.id)
	// identify the id and remove them from the data array
	persons = persons.filter(person => person.id !== id);
	res.status(204).end()
})

app.post('/api/persons', (req, res) => {
	// CODE BEFORE MONGODB WAS ADDED
		// // the data that is posted is stored in the request's body
		// const body = req.body;
		// if (!(body.name && body.number)) {
		// 	// we return so we exit the function and send the error code
		// 	return res.status(400).json(
		// 		{ error: 'person requires name and number' }
		// 	)
		// }
		// const existingPerson = persons.find(person => person.name === body.name);
		// if (existingPerson) {
		// 	return res.status(400).json(
		// 		{ error: 'person with this name already exists' }
		// 	)
		// }
		// // console.log(body);
		// const person = {
		// 	// generate random id
		// 	'id': Math.floor(Math.random() * 9999999),
		// 	'name': body.name,
		// 	'number': body.number
		// };
		// persons = persons.concat(person);
		// // send back the posted person in json format
		// res.json(person)
	const body = req.body;

	// make new person document
	const person = new Person({
		name: body.name,
		number: body.number
	});
	// save the new person to the database
	person.save().then(savedPerson => {
		res.json(savedPerson);
	});
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
});