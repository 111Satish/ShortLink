const express = require('express');
const router = express.Router();
const UserModel= require('../dataModels/userModel');

const signUp = () => {
    router.post('/', async (req, res) => {
        let data = { 'userName': "Satish Kumar", 'userId': "satishuser1", 'userEmail': 'Satish@123', 'userPassword': 'Satish@123' };
        let saveData = new UserModel(data);
        let result = await saveData.save();
        res.send(result);
    })
}
signUp();
module.exports = router;