const User = require('../models/User.js');

module.exports = { 
    CreateUser: async (req, res) => {
        try {
            const user = new User({
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email
            });
            await user.save();
            return res.status(200).send({message: 'OK'});
        } catch (error) { 
            if (error.name === "ValidationError") {       
                return res.status(400).send({message: '欄位不可空白'});
            }
            res.status(500).send("Something went wrong");
        }
    }
};