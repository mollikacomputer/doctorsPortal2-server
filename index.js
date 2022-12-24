const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors')
const { MongoClient, ServerApiVersion, CURSOR_FLAGS } = require('mongodb');

require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nkdan3b.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        await client.connect();
        const serviceCollection = client.db('doctorsPortal2').collection('services');
        app.get('/service', async(req, res)=>{
            const query = {};
            const cursor = serviceCollection.find(query);
            const services = await cursor.toArray();
            res.send(services);
        })
    }
    finally{

    }
}
// mustbe added this line
run().catch(console.dir);



console.log(uri);
app.get('/', (req, res) =>{
    res.send('Hello Doctors Portal-2')
});

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
});
