const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;

console.log('connection to', url);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
	.then(result => {
		console.log('connected to MongoDB')
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message)
	});

const personSchema = new mongoose.Schema({
	name: String,
	number: String,
});

/* 
One way to format the objects returned by Mongoose is to modify the toJSON method of the schema, which is used on all instances of the models produced with that schema. Modifying the method works like this:
*/
personSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
});

/*
The public interface of the module is defined by setting a value to the module.exports variable. We will set the value to be the Note model. The other things defined inside of the module, like the variables mongoose and url will not be accessible or visible to users of the module.
*/
module.exports = mongoose.model('Person', personSchema);