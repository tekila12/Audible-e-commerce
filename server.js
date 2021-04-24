require("dotenv").config({ path: "./config.env" });
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cors = require("cors")
const stripe = require("stripe")("sk_test_51IaINYEqJWuHZaMSf1i8G0QxR53CyfsoP6DicZJJnU3kOipMnGvSr13J9cZJIx4GiUwAQX7bqu0bpsb6cfPnvlOo00aRAgr24j")
const path= require('path')
connectDB();


app.use(express.json());
app.use(cors());



const calculateOrderAmount = items => {
  items={
    amount:1000
  }
  
  return 1400;
};
app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

// Connecting Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));
app.use(express.static("."));
// Error Handler Middleware
app.use(errorHandler);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname,'/client/build')));
  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html' ))
  })
} else{
  app.get('/', (req,res)=>{
    res.send('Api running')
  });
}


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);




process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});