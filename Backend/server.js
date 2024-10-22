import express from "express";
import mysql from "mysql";
import cors from "cors";
const port  = 8081
const app = express();
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"carparking"
})

app.get('/' ,(req ,res)=>{
    return res.json("From Backend Folder");
})


app.get('/parkingspot', (req, res) => {
    const sql = "SELECT * FROM parkingspot"; // Use the correct table name
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data); // Return the parking spots data as JSON
    });
});

app.listen(port ,()=>{
    console.log('Listening')
})

