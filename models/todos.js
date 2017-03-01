let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo:{
        type: String,
        required: [true,"Todo is empty"]
    },
    user:{
        type: Schema.Types.ObjectId, ref: 'User',
        required: [true,"User id is undefined"]
    }
});


module.exports = mongoose.model('Todo', todoSchema);