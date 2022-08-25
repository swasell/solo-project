const ProgramController = require('../controllers/program.controller');

module.exports = (app) => {

    app.get('/api/exercise', ProgramController.getAllExercises);
    app.post('/api/exercise/new', ProgramController.createExercise);
    app.get('/api/exercise/:id', ProgramController.getOneExercise);
    app.put('/api/exercise/edit/:id', ProgramController.updateExercise);
    app.delete('/api/exercise/:id', ProgramController.deleteExercise);


}