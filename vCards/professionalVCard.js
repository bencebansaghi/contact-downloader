const vCardJS = require('vcards-js');
require('dotenv').config();

const createProfessionalVCard = () => {
    vCard = vCardJS();
    vCard.firstName = process.env.FIRST_NAME;
    vCard.lastName = process.env.LAST_NAME;
    vCard.cellPhone = process.env.PROFESSIONAL_PHONE;
    vCard.email = process.env.PROFESSIONAL_EMAIL;

    vCard.workUrl = process.env.LINKEDIN_URL;
    vCard.url = process.env.GITHUB_URL;

    if (process.env.PROFESSIONAL_PHOTO_PATH) {
        vCard.photo.embedFromFile(process.env.PROFESSIONAL_PHOTO_PATH);
    }
    const birthday = new Date(process.env.BIRTHDAY);
    if (!isNaN(birthday.getTime())) {
        vCard.birthday = birthday;
    }
    
    return vCard;
};

module.exports = createProfessionalVCard;