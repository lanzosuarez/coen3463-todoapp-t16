let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require('./user');

const todoSchema = new Schema({
    name:{
        type: String,
        required: [true,"Try again"]
    },
    user:{
        type: Schema.Types.ObjectId, ref: 'User',
        required: [true,"User id is undefined"]
    },
    createDate: {type: Date},
    completeDate: {type: Date, default: null},
    isCompleted: {type: Boolean, default: false}
});

todoSchema.post('remove', (todo)=>{  //everytime a remove is called
    console.log("removing");
    console.log(todo);
    User.findById(todo.user, function (err, user) {  //grab the to then query the user
        console.log(user)
        user.todos.splice(user.todos.indexOf(todo._id),1); //pull the todo from the todos of the user
        console.log(user)
        user.save(); //then save
    });
});


module.exports = mongoose.model('Todo', todoSchema);