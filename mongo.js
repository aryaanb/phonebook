const mongoose = require('mongoose');

if (process.argv.length < 3) {
	console.log('Please provide the password as an argument: node mongo.js <password>')
	process.exit(1)
}

const password = process.argv[2];

const url =
	`mongodb+srv://fullstack:${password}@cluster0.we6ys.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

// how to shape the data in the document
const personSchema = new mongoose.Schema({
	name: String,
	number: String,
});

// Person is a constructor, an instance of it is a document
// mongoose will automatically name the associated collection as the plural of Person
const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 5) {
	const name = process.argv[3];
	const number = process.argv[4];
	// create a document 
	const person = new Person({
		name: name,
		number: number
	});

	person.save().then(result => {
		console.log(`added ${name} ${number} to the phonebook`);
		mongoose.connection.close();
	})
} else if (process.argv.length === 3) {
	Person.find({}).then(result => {
		// console.log(result);
		result.forEach(person => {
			console.log(person.name, person.number);
		})
		mongoose.connection.close();
	})
} else {
	console.log('Please provide your arguments in the following format: node mongo.js <password> <name> <number>')
	process.exit(1)
}


