const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;


// Middle ware
app.use(cors());
app.use(express.json());



// const uri = "mongodb+srv://<username>:<password>@cluster0.0i3pjbq.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb+srv://E_Commerce:2Yj58wch1pi7RaE4@cluster0.0i3pjbq.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Mongo Db
    const userCollection = client.db("Shoe_E_Commerce").collection("users");
    const shoesCollection = client.db("Shoe_E_Commerce").collection("Shoes");


    // User Collection
    app.post('/users', async(req, res) =>{
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exist" });
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    })

    app.get('/users', async(req, res) =>{
      const user = await userCollection.find().toArray()
      res.send(user)
    })
    // Shoes Collection
    app.get("/shoes", async(req, res) =>{
      const shoes = await shoesCollection.find().toArray()
      res.send(shoes)
    })

    















    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("MONGODB Connect successfully😊😊😊");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("Sever is running 😊😊😊");
});
app.listen(port);