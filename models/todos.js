let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const todoSchema = new Schema({
    name:{
        type: String,
        required: [true,"Todo is empty"]
    },
    user:{
        type: Schema.Types.ObjectId, ref: 'User',
        required: [true,"User id is undefined"]
    },
    createDate: {type: Date},
    completeDate: {type: Date, default: null},
    isCompleted: {type: Boolean, default: false}
});


module.exports = mongoose.model('Todo', todoSchema);