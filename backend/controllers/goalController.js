// Get goals
// @route Get /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// Set goals
// @route Post /api/goals
// @access Private
const setGoal = (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a new text field')
    }

    res.status(200).json({message: 'Set goal'})
}

// Update goals
// @route Update /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// Delete goals
// @route Delete /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}