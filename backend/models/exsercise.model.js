const mongoose = require('mongoose')

const Schema = mongoose.Schema

const exserciseSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
}, { timestamps: true })

const Exsercise = mongoose.model('Exsercise', exserciseSchema)

module.exports = Exsercise