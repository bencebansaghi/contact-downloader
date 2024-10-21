# Contact Downloader

Contact Downloader is a Node.js application that allows users to download personal and professional vCards. The application uses Express.js for the server and `vcards-js` for generating vCards. The application is hosted on a local server and uses ngrok to create a secure tunnel to the server, allowing users to access the application from anywhere. There are also QR codes provided for easy access to the application.

## Table of Contents

- [Contact Downloader](#contact-downloader)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Routes](#routes)
  - [Environment Variables](#environment-variables)
- [Personal vCard](#personal-vcard)
- [Professional vCard](#professional-vcard)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/contact-downloader.git
    cd contact-downloader
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the required environment variables (see [Environment Variables](#environment-variables)).

4. Create an [ngrok](https://ngrok.com/) account and follow the setup and installation instructions for Node.js.

    > **Note:** If using a free ngrok account, users will have to confirm to navigate to the page, which can be irritating but it is done to prevent abuse, which is a little irritating especially when using QR codes, but it is what it is ¯\\_(ツ)_/¯

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. There are two ways to access the application:

    2. There are two ways to access the application:

        - **Using the URL directly:** Open a web browser and navigate to the link provided by ngrok in the console.
        - **Using the QR codes:** Open a QR code scanner app on a mobile device and scan the QR codes located in `./qr-codes/qr-code-images`.

## Routes

- `GET /` - Home page with links to download personal and professional vCards.
- `GET /vcard/download-personal-vcard` - Download the personal vCard.
- `GET /vcard/download-professional-vcard` - Download the professional vCard.

    > **Note:** ./qr-codes/qr-code-images/professional-qrcode.png points to this route.
- `GET /vcard/download-professional-vcard` - Download the professional vCard.
    > **Note:** ./qr-codes/qr-code-images/professional-qrcode.png points to this route.

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=3000
FIRST_NAME=John
LAST_NAME=Doe
BIRTHDAY=1990-01-01

# Personal vCard
PERSONAL_PHONE=123-456-7890
PERSONAL_EMAIL=john.doe@example.com
INSTAGRAM_URL=https://instagram.com/johndoe
PERSONAL_PHOTO_PATH=/path/to/personal/photo.jpg

# Professional vCard
PROFESSIONAL_PHONE=098-765-4321
PROFESSIONAL_EMAIL=john.doe@company.com
LINKEDIN_URL=https://linkedin.com/in/johndoe
GITHUB_URL=https://github.com/johndoe
PROFESSIONAL_PHOTO_PATH=/path/to/professional/photo.jpg