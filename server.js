const app = require('./index');
const http = require('http');
const ngrok = require('ngrok');
const generateQrCodes = require('./qr-codes/generateQrCodes');

const server = http.createServer(app);
let url;

server.listen(0, async () => {
    const port = server.address().port
    console.log(`Server running on http://localhost:${port}`);
    
    try {
        url = await ngrok.connect(port);
        console.log(`ngrok tunnel opened at ${url}`);
    } catch (err) {
        console.error('Error opening ngrok tunnel:', err);
    }

    generateQrCodes(url);
});