const express = require('express');
const UrlModel = require('../dataModels/urlModel');
const router = express.Router();
const shortID = require('shortid');

router.post('/', async (req, res) => {
    let longUrl = req.body.longUrl;
    let Sid = await shortID.generate(longUrl);
    let data = { "Lurl": longUrl, "urlID": Sid, "clicks": 0 }
    let SaveData = new UrlModel(data);
    let result = await SaveData.save();
    res.send('localhost:5000/' + Sid);
})

module.exports = router;
