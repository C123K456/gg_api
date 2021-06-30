const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors')
const admin = require('firebase-admin');

const app = express();
app.use(cors());
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: "https://blcpweb-covid19-default-rtdb.firebaseio.com"
})

app.get('/hello-world', (req, res) => {
    return res.status(200).json({ message: 'Hello world' })
});

app.use(require('./routes/employees.routes'))

exports.app = functions.https.onRequest(app);