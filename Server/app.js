const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;

// Middle ware
app.use(cors());
app.use(express.json());

// .Middleware use verify
const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send({ error: true, message: "unauthorized token" });
  }

  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .send({ error: true, message: "unauthorized token" });
    }
    req.decoded = decoded;
    next();
  });
};


const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://shoeECommerce:fRxnxEwniPg1uwGH@cluster0.0i3pjbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const shoesCollection = client.db("ShoeECommerce").collection("shoes");
    const usersCollection = client.db("ShoeECommerce").collection("users");
    const upZillahCollection = client
    .db("ShoeECommerce")
    .collection("upZillah");
  const districtCollection = client
    .db("ShoeECommerce")
    .collection("District");
  const divisionCollection = client
    .db("ShoeECommerce")
    .collection("Divisions");
    // JWT
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token =  jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "1h",
      });
      res.send({token});
    })

    // Users
    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await usersCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exist" });
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    app.put("/users", async (req, res) => {
      const updatedUserData = req.body;
      console.log(updatedUserData);
      const query = { email: updatedUserData.email };
      const existingUser = await userCollection.findOne(query);
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const result = await userCollection.updateOne(query, {
        $set: updatedUserData,
      });
      res.send(result);
    });

    
    app.get("/users", async (req, res) => {
      const user = await usersCollection.find().toArray();
      res.send(user);
    });

    // 
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      if (user?.role !== "admin") {
        return res
          .status(403)
          .send({ error: true, message: "forbidden access" });
      }
      next();
    };
    // Update user to admin
    app.patch("/users/admin/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      console.log(filter);
      const updatedDoc = {
        $set: {
          role: "admin",
        },
      };
      const result = await usersCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    // Get admin
    app.get("/users/admin/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;

      if (req.decoded.email !== email) {
        res.send({ admin: false });
      }
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      const result = { admin: user?.role === "admin" };
      res.send(result);
    });


    // Shoes
    app.get("/shoes", async (req, res) => {
      const shoes = await shoesCollection.find().toArray();
      res.send(shoes);
    });





    // Address
    app.get("/district", async (req, res) => {
      const district = await districtCollection.find().toArray();
      res.send(district);
    });
    // division
    app.get("/divisions", async (req, res) => {
      const divisions = await divisionCollection.find().toArray();
      res.send(divisions);
    });
    // upzillah
    app.get("/upZillahs", async (req, res) => {
      const upZillahs = await upZillahCollection.find().toArray();
      res.send(upZillahs);
    });

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
