const vCardJS = require('vcards-js');
require('dotenv').config();

const createPersonalVCard = () => {
    vCard = vCardJS();
    vCard.firstName = process.env.FIRST_NAME;
    vCard.lastName = process.env.LAST_NAME;
    vCard.cellPhone = process.env.PERSONAL_PHONE;
    vCard.email = process.env.PERSONAL_EMAIL;
    vCard.url = process.env.INSTAGRAM_URL;

    if (process.env.PERSONAL_PHOTO_PATH) {
        vCard.photo.embedFromFile(process.env.PERSONAL_PHOTO_PATH);
    }
    
    const birthday = new Date(process.env.BIRTHDAY);
    if (!isNaN(birthday.getTime())) {
        vCard.birthday = birthday;
    }

    return vCard;
};

module.exports = createPersonalVCard;