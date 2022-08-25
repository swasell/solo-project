const Exercise = require('../models/program.model.js');

module.exports = {

    createExercise: (req, res) => {
        Exercise.create(req.body)
            .then(newExercise => res.json(newExercise))
            .catch(err => res.status(400).json(err));
    },

    getAllExercises: (req, res) => {
        Exercise.find({})
            .then(allExercises => {
                console.log(allExercises);
                res.json(allExercises);
        })
            .catch((err) => {
                console.log(err)
                res.status(400).json(err)
        })
    },

    getOneExercise: (req, res) => {
        Exercise.findOne({ _id: req.params.id })
            .then(oneExercise => res.json(oneExercise))
            .catch(err => res.status(400).json(err))
    },

    updateExercise: (req, res) => {
        Exercise.findOneAndUpdate({ _id: req.params.id }, req.body, {new:true})
        .then(updatedExercise => res.json(updatedExercise))
        .catch(err => res.status(400).json(err))
    },

    deleteExercise: (req, res) => {
        Exercise.deleteOne({ _id: req.params.id })
            .then(deleteExercise => res.json(deleteExercise))
            .catch(err => res.status(400).json(err))
    }
}