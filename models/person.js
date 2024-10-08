const mongoose = require('mongoose')

// Person Schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    age: {
        type: Number
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        required: true

    }
})


// create Person Model
const Person = mongoose.model('Person', personSchema)
module.exports = Person
