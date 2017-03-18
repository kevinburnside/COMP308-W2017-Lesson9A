// require modules for our User Model
var mongoose = require('mongoose');
var Schema = mongoose.Schema; //alias for mongoose Schema
var passportLocalMongoose = require('passport-local-mongoose');
var UserSchema = new Schema({
    username: {
        type: String,
        default: '',
        trim: true,
        required: 'username is required'
    },
    /* password: {
       type: String,
       default: '',
       trim: true,
       required: 'password is required'
     },*/
    email: {
        type: String,
        default: '',
        trim: true,
        required: 'email is required'
    },
    displayName: {
        type: String,
        default: '',
        trim: true,
        required: 'Display Name is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
}, {
    collection: "users"
});
var options = ({ missingPasswordError: "Wrong Password" });
UserSchema.plugin(passportLocalMongoose, options);
exports.User = mongoose.model('User', UserSchema);
//# sourceMappingURL=users.js.map