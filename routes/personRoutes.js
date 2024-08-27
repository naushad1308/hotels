const express = require('express')
const router = express.Router()

const Person = require('../models/person');


// Person Create
router.post("/", async (req, res) => {

    try {
        const data = req.body
        const newPerson = new Person(data)

        const response = await newPerson.save()
        console.log('person data saved successfully')
        res.status(201).json(response)
    }
    catch (err) {
        console.log(err)
    }
})

// person read
router.get('/', async (req, res) => {
    try {
        const data = await Person.find()
        // console.log("data fetched")
        res.status(201).json(data)
    }
    catch (err) {
        console.log(err)
    }
}
)

// Person read By work filter
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType
        const response = await Person.find({ work: workType })
        console.log(response[0].name)
        console.log('data fetched')
        res.status(201).json(response)
    }
    catch (err) {
        console.log(err)
        res.json({ error: 'Internal Server Error' })
    }
})

// person update
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        console.log('person data fetched')
        const response = await Person.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true
        })

        if (!response) {
            return res.status(404).json({ error: 'person not found' })
        }
        // console.log('person data updated')
        res.status(201).json(response)

    }
    catch (err) {
        console.error(err); // Log the error for debugging purposes
        res.status(500).json({ error: err.message });
    }
})


// person Delete
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id


        const response = await Person.findByIdAndDelete(personId)
        if (!response) {
            return res.status(404).json({ error: 'person not found' })
        }
        // res.status(201).json({ message: personId + ' is removed Now' })
        res.status(200).json({
            message: `Person ${response.name} with ID ${personId} is removed successfully`
        })

    }
    catch (err) {
        console.error(err); // Log the error for debugging purposes
        res.status(500).json({ error: err.message });
    }
})

module.exports = router