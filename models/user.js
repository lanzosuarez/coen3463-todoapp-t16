let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var userSchema = new Schema ({
    username:{
        type:String,
        validate:{
            validator:(v)=>{
                var r = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                return r.test(v);
            },
            message: 'Email is invalid!'
        },
    },
    firstName:{
        type:String,
        required:[true, "Firstname is required"],
        minlength: [2, 'First name is too short'],
        lowercase: true
    },
    lastName:{
        type:String,
        required:[true, "Lastname is required"],
        minlength: [2, 'Last name is too short'],
        lowercase: true
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
