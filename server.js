import minimist from "minimist"; 
import express from "express"; 
import {rps, rpsls} from './lib/rpsls.js'; 
//express app 
const app = express(); 
//port 
let args = minimist(process.argv.slice(2)); 
const port = args.port || 5000; 
//app 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 
app.listen(port); 
app.get("/app", (_, res) => {
    res.status(200).send("200 OK"); 
})
app.get("/app/rps", (req, res) => {
    res.status(200).send(rps()); 
})
app.get("/app/rpsls", (req, res) => {
    res.status(200).send(rpsls()); 
})
app.get('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.query.shot)); 
}) 
app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.query.shot)); 
}) 
app.post('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.body.shot)); 
})
app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.body.shot)); 
})
app.get('/app/rps/play/:arg', (req, res) => {
    res.status(200).send(rps(req.params.arg)); 
})
app.get('/app/rpsls/play/:arg', (req, res) => {
    res.status(200).send(rpsls(req.params.arg)); 
})
app.get('*', (req,res) => {
    res.status(404).send('404 NOT FOUND'); 
}) 