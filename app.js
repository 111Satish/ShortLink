const express = require('express');
const MdbConnect = require('./config');

const app = express();
const PORT = 5000;


app.use(express.json());


const signUpRouter = require('./routers/signUp');
const shortUrlRouter = require('./routers/shortUrl');
const redirectUrlRouter = require('./routers/redirectUrl');
app.use('/SignUp', signUpRouter);
app.use('/ShortUrl', shortUrlRouter);
app.use(redirectUrlRouter);
MdbConnect();


app.listen(PORT, () => {
    console.log("Server Running on port " + PORT);
})

module.exports = app;
