const User = require('./Model');


// passes a created user to db
// takes the user document from the body
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: 'success',
            user,
        });
        console.log('added a user.')
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error,
        });
    }
};

exports.showDB = async (req, res) => {
    User.findOne({ mail: req.body.mail }, (error, foundUser) => {
        if (!error) {
            foundUser = req.body
            console.log(foundUser)
            res.status(201).json({
                status: 'success',
                foundUser
            })
        }
    })
};

exports.inactiveUser = async (req, res) => {
    User.findOneAndRemove({ mail: req.body.mail }, (error, deletedUser) => {
        if (!error) {
            console.log(deletedUser)
            res.status(201).json({
                status: 'success',
                deletedUser
            });
        }
    })

    /*     res.status(201).json({
        status: 'success',
        deletedUser */

    console.log('user set to inactive');
};

/*const inactivate = await User.find(req.body)
    let email = inactivate.mail
    updateduser = User.find({name: email})
    updateduser.activity = false
    User.deleteOne({mail: email}, {activity: false}) */

