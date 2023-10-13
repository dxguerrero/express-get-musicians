const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get('/musicians', async(req, res) => {
        try{
        const allMusicians = await Musician.findAll();
        res.json(allMusicians);
    }
    catch(error){
        res.status(500).json({error: "An error occured when fetching musicians"});
    }
})

app.get('/musicians/1', async(req, res) => {
    try{
        const firstMusician = await Musician.findByPk(1);
        res.json(firstMusician);
    }
    catch(error){
        res.status(500).json({error: "An error occured when fetching the first musician"});
    }
})

app.get('/musicians/2', async(req, res) => {
    try{
        const secondMusician = await Musician.findByPk(2);
        res.json(secondMusician);
    }
    catch(error){
        res.status(500).json({error: "An error occured when fetching the second musician"});
    }
})

app.get('/musicians/3', async(req, res) => {
    try{
        const thirdMusician = await Musician.findByPk(3);
        res.json(thirdMusician);
    }
    catch(error){
        res.status(500).json({error: "An error occured when fetching the third musician"});
    }
})

app.get('/bands', async(req, res) => {
    try{
        const allBands = await Band.findAll();
        res.json(allBands);
    }
    catch(error){
        res.status(500).json({error: "An error occured when fetching bands"});
    }
})

module.exports = app;