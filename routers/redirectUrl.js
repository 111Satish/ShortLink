const express = require('express');
const router = express.Router();
const shortID = require('shortid');
const UrlModel = require('../dataModels/urlModel');

router.get('/:key', async (req, res) => {
    let key = req.params.key;
    if (!shortID.isValid) {
        res.send('URL is not Valid');
    }
    else {
        let data = await UrlModel.find({ "urlID": key });
        let click = data[0].clicks + 1;
        const updateData = await UrlModel.updateOne(
            { "urlID": key },
            {
                $set: { "clicks": click }
            }
        )
        res.redirect(data[0].Lurl);
    }
})

module.exports = router;