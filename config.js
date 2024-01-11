
const express = require('express');
const mongoose = require('mongoose');

uri = 'mongodb://localhost:27017/ShortLink';
const MdbConnect = ()=>{
    mongoose.connect(uri)
    .then(()=>{
        console.log('Mongo databse Connected');
    })
    .catch((err)=>{
        console.error('Error Found ' +err);
    })
}

module.exports = MdbConnect;