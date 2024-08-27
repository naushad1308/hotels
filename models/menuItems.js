const mongoose = require('mongoose')

const menuItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true
    },
    isDrink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        required: true,
        default: []
    },
    numberOfSales: {
        type: Number,
        default: 0
    }
})

const MenuItems = mongoose.model('MenuItems', menuItemsSchema)

module.exports = MenuItems