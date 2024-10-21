const express = require('express');
const vcardRoutes = require('./routes/vCardRoutes');

const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/vcard', vcardRoutes);

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the vCard Download Service</h1>
        <p><a href="/vcard/download-personal-vcard">Download Personal vCard</a> | 
        <a href="/vcard/download-professional-vcard">Download Professional vCard</a></p>`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

module.exports = app;
