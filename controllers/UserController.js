const User = require('../models/User.js');

module.exports = { 
    CreateUser: async (req, res) => {
        console.log(req.body);
        // console.log(req);
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
    },
    UpdateUser: async (req, res) => {
        
        // 確認user是否存在
            // error 1 沒給 id
            // error 2 找不到 id
        // 更改user某些欄位
            // error 3 更新內容不合法
        // error 4 不可預期錯誤
        
        if (req.body.id === undefined) {
            return res.status(400).send({message: 'ID不可空白'});
        }
        const rawUser = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        };
        try {
            await new User(rawUser).validate();
        } catch (err) {
            console.log("Validation Error");
            return res.status(400).send({message: '更新參數有遺漏'});
        }
        
        User.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        }, function (err) { 
            if (err){ 
                console.log(err.name); 
                return res.status(404).send({message: '找不到此ID'});
            } 
            else { 
                return res.status(200).send({message: 'OK'});
            } 
        });
    },
    GetUser: async (req, res) => {
        
        // 確認user是否存在
            // error 1 沒給 id
            // error 2 找不到 id
        // 搜尋user
        // error 4 不可預期錯誤
        
        if (req.body.id === undefined) {
            return res.status(400).send({message: 'ID不可空白'});
        }
        
        User.findById(req.body.id, function (err, result) { 
            if (err){ 
                console.log(err.name); 
                return res.status(404).send({message: '找不到此ID'});
            } 
            else { 
                return res.status(200).send({message: result });
            } 
        });
    },
    DeleteUser: async (req, res) => {
        
        // 確認user是否存在
            // error 1 沒給 id
            // error 2 找不到 id
        // 刪除user
        // error 4 不可預期錯誤
        
        if (req.body.id === undefined) {
            return res.status(400).send({message: 'ID不可空白'});
        }
        
        User.findByIdAndDelete(req.body.id, function (err, result) { 
            if (err){ 
                console.log(err.name); 
                return res.status(404).send({message: '找不到此ID'});
            } 
            else { 
                return res.status(200).send({Deleted: result });
            } 
        });
    }
};