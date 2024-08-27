const express = require("express")

const router = express.Router()

const MenuItems = require("../models/menuItems.js")


// menu Api create
router.post("/", async (req, res) => {
    try {

        const data = req.body
        const newMenuItem = new MenuItems(data)
        console.log('new Item added')
        const response = await newMenuItem.save()
        res.status(201).json(response)
    }
    catch (err) {
        console.log(err)
        res.status(500)
    }
}
)

// menu Api read
router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItems.find()
        res.status(200).json(menuItems)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// menu Api read by taste
router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.taste
        const data = await MenuItems.find({ taste: taste })
        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})


router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        console.log('data fetched')
        const response = await MenuItems.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true
        })

        if (!response) {
            return res.status(404).json({ error: 'person not found' })
        }
        res.status(201).json(response)

    }
    catch (err) {
        console.error(err); // Log the error for debugging purposes
        res.status(500).json({ error: err.message });
    }
})

module.exports = router