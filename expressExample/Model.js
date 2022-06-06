const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    mail: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    activity: {
        type: Boolean,
        default: true
    }
});

const Model = mongoose.model('User', UserSchema);

module.exports = Model;