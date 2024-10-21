const express = require('express');
const fs = require('fs');
const path = require('path');
const personalVCard = require('../vCards/personalVCard');
const professionalVCard = require('../vCards/professionalVCard');

const router = express.Router();

router.get('/download-personal-vcard', (req, res) => {
    const vCard = personalVCard();
    const vCardPath = path.join(__dirname, '../personalContact.vcf');

    vCard.saveToFile(vCardPath);

    res.download(vCardPath, 'personalContact.vcf', (err) => {
        if (err) {
            console.error('Error sending personal vCard:', err);
            res.status(500).send('An error occurred while downloading personal contact.');
        } else {
            fs.unlinkSync(vCardPath);
        }
    });
});

router.get('/download-professional-vcard', (req, res) => {
    const vCard = professionalVCard();
    const vCardPath = path.join(__dirname, '../professionalContact.vcf');

    vCard.saveToFile(vCardPath);

    res.download(vCardPath, 'professionalContact.vcf', (err) => {
        if (err) {
            console.error('Error sending professional vCard:', err);
            res.status(500).send('An error occurred while downloading professional contact.');
        } else {
            fs.unlinkSync(vCardPath);
        }
    });
});

module.exports = router;
