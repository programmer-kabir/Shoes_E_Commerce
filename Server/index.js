const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.PAYMENT_SCREAT_KEY);

const jwt = require("jsonwebtoken");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0i3pjbq.mongodb.net/?retryWrites=true&w=majority`;
// const uri = "mongodb+srv://E_Commerce:2Yj58wch1pi7RaE4@cluster0.0i3pjbq.mongodb.net/?retryWrites=true&w=majority";
// console.log(process.env.ACCESS_TOKEN);
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
    // Mongo Db
    const userCollection = client.db("Shoe_E_Commerce").collection("users");
    const shoesCollection = client.db("Shoe_E_Commerce").collection("Shoes");
    const upZillahCollection = client
      .db("Shoe_E_Commerce")
      .collection("upZillah");
    const districtCollection = client
      .db("Shoe_E_Commerce")
      .collection("District");
    const divisionCollection = client
      .db("Shoe_E_Commerce")
      .collection("Division");
    const bookedCollection = client.db("Shoe_E_Commerce").collection("Booked");
    const paymentCollection = client
      .db("Shoe_E_Commerce")
      .collection("payment");

    // jwT
    app.post("/jwt", (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: "1h",
      });
      res.send({ token });
    });

    // User Collection
    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);
      if (existingUser) {
        return res.send({ message: "user already exist" });
      }
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // user update
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
      const user = await userCollection.find().toArray();
      res.send(user);
    });

    // handle admin
    const verifyAdmin = async (req, res, next) => {
      const email = req.decoded.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
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
      const updatedDoc = {
        $set: {
          role: "admin",
        },
      };
      const result = await userCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    // Get admin
    app.get("/users/admin/:email", verifyJWT, async (req, res) => {
      const email = req.params.email;

      if (req.decoded.email !== email) {
        res.send({ admin: false });
      }
      const query = { email: email };
      const user = await userCollection.findOne(query);
      const result = { admin: user?.role === "admin" };
      res.send(result);
    });

    // Shoes Collection
    app.get("/shoes", async (req, res) => {
      const shoes = await shoesCollection.find().toArray();
      res.send(shoes);
    });

    // Booked Data
    app.post("/booked", async (req, res) => {
      const body = req.body;
      console.log(body);
      const id = body.productId;
      const email = body.email;
      const filter = { productId: id, email };
      console.log(filter);
      const data = await bookedCollection.findOne(filter);
      if (data) {
        return res.send({ message: "Class already exist" });
      } else {
        const result = await bookedCollection.insertOne(body);
        res.send(result);
      }
    });
    app.get("/booked", async (req, res) => {
      const email = req.query.email;
      // console.log(email);
      if (!email) {
        res.send([]);
      }
      const query = { email: email };
      const data = await bookedCollection.find(query).toArray();
      res.send(data);
    });

    app.post("/create-payment-intent", async (req, res) => {
      const { price } = req.body;
      const amount = price * 100;
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "bdt",

        payment_method_types: ["card"],
      });
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });

    // payemnt
    app.post("/payment", async (req, res) => {
      const body = req.body;
     const insertResult = await paymentCollection.insertOne(body)
      const query = {
        _id: {
          $in: body.bookedId.map((id) => new ObjectId(id)),
        },
      };
      const deleteResult = await bookedCollection.deleteMany(query)
      res.send({insertResult, deleteResult})
    });
// get payemnt
app.get('/payment', async(req, res) =>{
  const email = req.query.email;
  if (!email) {
    res.send([]);
  }
  const query = { email: email };
  const data = await paymentCollection.find(query).toArray();
  res.send(data);
})


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
