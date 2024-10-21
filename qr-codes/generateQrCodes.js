const QRCode = require('qrcode');
const path = require('path');

const outputDir = path.join(__dirname, 'qr-code-images');

const generateQrCode = async (full_url) => {
    try {
        const fileName = full_url.split('/').pop().split('-')[1];
        const filePath = path.join(outputDir, `${fileName}-qrcode.png`);
        await QRCode.toFile(filePath, full_url);
        console.log(`QR code saved to ${filePath}`);
    } catch (err) {
        console.error('Error generating QR code:', err);
    }
};

const generateQrCodes = async (url) => {
    const personal_url = url+'/vcard/download-personal-vcard';
    await generateQrCode(personal_url);
    const professional_url = url+'/vcard/download-professional-vcard';
    await generateQrCode(professional_url);
};

module.exports = generateQrCodes;