const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nkdan3b.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


console.log(uri);
app.get('/', (req, res) =>{
    res.send('Hello Doctors Portal-2')
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
});
