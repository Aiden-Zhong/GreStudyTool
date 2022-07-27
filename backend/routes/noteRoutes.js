const express = require('express')
const router = express.Router()
const {getNotes, setNote, deleteNotes} = require('../controllers/noteController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getNotes).post(protect, setNote)
router.route('/:id').delete(protect, deleteNotes)

module.exports = router