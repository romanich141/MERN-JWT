// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals =  (req, res) => {
    res
        .status(200)
        .json({ message: "get goals", });
};

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
    res
        .status(201)
        .json({ message: "set goal success" })
};

const updateGoal = (req, res) => {
    res
        .status(200)
        .json({ message: `update goal ${ req.params.id }  success` })
};

const deleteGoal = (req, res) => {
    res
        .status(200)
        .json({ message: `delete goal ${ req.params.id }  success` })
};

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}