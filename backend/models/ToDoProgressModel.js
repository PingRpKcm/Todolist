const mongoose = require('mongoose')

const todoProgressSchema = new mongoose.Schema({
    status: {
        type:String,
        require: true
    }
})

module.exports = mongoose.model('ToDoProgress', todoProgressSchema)