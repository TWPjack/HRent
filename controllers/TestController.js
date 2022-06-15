const User = require('../models/User.js');

module.exports = { 
    Test: (req, res) => {
        const user = new User({
            name: 'John',
            phone: '0965956285',
            email: 'john95s6@example.com'
        });
        user.save((err) => {
            if (err) {
                throw err;
            } 
        });
        return res.status(200).send({message: 'OK'});
    }
};