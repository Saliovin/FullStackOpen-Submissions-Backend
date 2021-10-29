const mongoose = require('mongoose')
const mongooseUniqueValidator = require('mongoose-unique-validator')

const uri = process.env.DB_URI

console.log(`Connecting to ${uri}`)

mongoose.connect(uri)
  .then(result => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log(`Error connecting to MongoDB: ${error.message}`);
  })

const personSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true, minlength: 3 },
  number: { type: String, required: true, minlength: 8 }
})

personSchema.plugin(mongooseUniqueValidator)

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)