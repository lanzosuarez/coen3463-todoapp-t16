var express = require('express'),
    router = express.Router(),
    Todo = require('../models/todos'),
    User = require('../models/user');


// router.get('/add', (req,res)=>{
//     Todo.find()
// });
function handleError500(err){
    return res.status(500).json({
        success: false,
        title: 'Error',
        response: err
    });
}

router.post('/add', (req,res)=>{
    User.findById(req.body.user, (err, user)=>{
        if(!req.user){
            return res.status(401).json({
                success: false,
                title: 'Unauthorized'
            });
        }
        if(!user || err){
            handleError500(err);
        }
        console.log("user found");
        console.log(user);
        const todo = new Todo({
            name: req.body.name,
            user: user,
            createDate: req.body.createDate,
        });
        todo.save((err,todo)=>{
            if(err){
                console.log(err)
                handleError500(err)
            }
            user.todos.push(todo);
            user.save();
            console.log("success");
            res.status(201).json({
                success:true,
                title: 'Success',
                response: todo
            });
        });
    });
});

module.exports = router;