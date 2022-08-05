const asyncHandler = require('express-async-handler')

const Note = require('../models/noteModel')

//Get notes
//@route Get /api/notes
//@access private 
const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({user: req.user.id})

    res.status(200).json(notes)
})

//Set notes
//@route Post /api/notes
//@access Private
const setNote = asyncHandler(async (req, res) => {
    if(!req.body.EN_text || !req.body.CN_text) {
        res.status(400)
        throw new Error('No word text provided')
    }

    //Check if note already exist
    const wordExists = await Note.findOne({EN_text: req.body.EN_text})

    if (wordExists) {
        res.status(400)
        throw new Error('Word already in notes')
    }

    const note = await Note.create({
        EN_text: req.body.EN_text,
        CN_text: req.body.CN_text,
        user: req.user.id
    })

    res.status(200).json(note)
})

//Delete notes
//@route Delete /api/notes
//@access Private
const deleteNotes = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id)

    //Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    //Make sure the logged in user matches the note user
    if(note.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    if(!note) {
        res.status(400)

        throw new Error('Note not found')
    }

    await note.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getNotes,
    setNote,
    deleteNotes
}