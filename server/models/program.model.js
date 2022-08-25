const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
    
    name: { 
        type: String, 
        required: [true, "Exercise name is required"],
        maxlength: [40, 'The name should be no more than 40 characters'],
        minlength: [2, "The name should have 2 or more characters"]
    },
    focus: { 
        type: String,
        required: [true, "Muscles focused are required"],
        maxlength: [40, "This field should be no more than 40 characters"],
        minlength: [2, "This field should must have 2 or more characters"]
    },
    description: { 
        type:String,
        required: [true, "Description is required"],
        minlength: [2, 'Description must be 2 or more characters']
    },
}, 

{ timestamps: true })


const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;