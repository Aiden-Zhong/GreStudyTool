const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    EN_text: {
        type: String,
        require: true
    },
    CN_text: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Note', noteSchema)