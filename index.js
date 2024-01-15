const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fkjuk.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


async function run() {
  try {
    await client.connect();
    const electronicProductCollection = client.db('electronic_web').collection('electronicProduct');
  

    //fetch all data here
    app.get('/electronicProduct', async (req, res) => {
      const query = {};
      const cursor = electronicProductCollection.find(query);
      const products = await cursor.toArray();
      res.send(products);
    });
  
  
  
  
  
  
  
  }
  finally {
    
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('hello world from electronic web');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
