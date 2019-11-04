const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const mongodb = 'mongodb+srv://admin:admin@cluster0-6fokd.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongodb,{useNewUrlParser:true});

app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());
app.get('/', (req, res) =>
    res.send('Hello World!'))

    //Adding a BluePrint to the Project
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title:String,
    year:String,
    poster:String
})

app.delete('/api/movies/:id',(req,res)=>{
    console.log(req.params.id);
    MovieModel.deleteOne({_id:req.params.id},(error,data)=>{
        if(error)
            res.json(error);
        res.json(data);
    })
})
const MovieModel = mongoose.model('movie',movieSchema);


app.get('/whatever', (req, res) =>
    res.send('Hello Mike!'))

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name)
    res.send('Hello, Ohh Weee! ' + req.params.name);
})


app.get('/api/movies', (req, res) => {
    MovieModel.find((error, data) => {
        res.json(data);
    })
    // const movies = [

    //     // {
        //     "Title": "Avengers: Infinity War",
        //     "Year": "2018",
        //     "imdbID": "tt4154756",
        //     "Type": "movie",
        //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        // },
        // {
        //     "Title": "Captain America: Civil War",
        //     "Year": "2016",
        //     "imdbID": "tt3498820",
        //     "Type": "movie",
        //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        // },
        // {
        //     "Title": "World War Z",
        //     "Year": "2013",
        //     "imdbID": "tt0816711",
        //     "Type": "movie",
        //     "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        // }
        // , {
        //     "Title": "War of the Worlds",
        //     "Year": "2005",
        //     "imdbID": "tt0407304",
        //     "Type": "movie",
        //     "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
        // }

    // ];

    // res.status(200).json(
    //     {
    //         movies: movies,
    //         message: 'Hello From Server'
    //     });
})

app.post('/api/movies', (req,res)=>{
      console.log("Posted");
      console.log(req.body.title);
      console.log(req.body.year);
      console.log(req.body.poster);
      MovieModel.create({
        title: req.body.title,
        year: req.body.year,
        poster: req.body.poster
      });

      res.json('post recieved');
})

app.get('/api/movies/:id', (req, res, next) => {
    console.log(req.params.id);
    MovieModel.findById(req.params.id,
    function (err, data) {
    res.json(data);
    });
})

    
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})


app.get('/name', (req, res) => {
    console.log(req.query.firstname);
    console.log(req.query.lastname);
    res.send('Hello ' + " " + req.query.firstname + " " + req.query.lastname);
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/name', (req, res) => {
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    res.send('Hello ' + req.body.firstname +
        " " + req.body.lastname);
})
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`))
    
app.get('/api/movies', (req, res, next) => {
    MovieModel.find(function (err, data) {
    console.log(data);
    res.json(data);
    });
})
        