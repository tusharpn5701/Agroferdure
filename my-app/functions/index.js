const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express =  require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JuLI8SBvJmml6Kg0qg2DLleJIN0r17BysndiY6tB8N3dBfBYfi0dz9kfrYL4ULJ8FPXBHI43LQKzsX1ACFmqYMN00ZWTn9W1X')

//API

// - App config
const app = express();


// - Middlewares
app.use(cors({ origi: true}));
app.use(express.json());

//-API routes
app.get('/', (request, response) => response.status(200).send
('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
    	amount : total,
    	currency: "inr",
    });

    response.status(201).send({
    	clientSecret: paymentIntent.client_secret,
    })
})

//-listen command

exports.api = functions.https.onRequest(app)

// http://localhost:5001/agroferdure-8e778/us-central1/api

