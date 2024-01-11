const express = require('express');
const MdbConnect = require('./config');
const UrlModel = require('./model');
const shortID = require('shortid');
const app = express();
const PORT = 5000;
MdbConnect();

app.use(express.json());

app.get('/:key', async (req, res) => {
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

app.post('/ShortURL', async (req, res) => {
    let longUrl = req.body.longUrl;
    let Sid = await shortID.generate(longUrl);
    let data = { "Lurl": longUrl, "urlID": Sid, "clicks": 0 }
    let SaveData = new UrlModel(data);
    let result = await SaveData.save();
    res.send('localhost:5000/' + Sid);
})

app.listen(PORT, () => {
    console.log("Node Running on port " + PORT);
})

module.exports = app;
