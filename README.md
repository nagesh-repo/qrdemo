# QR Message Generator

A lightweight web application that allows you to create QR codes containing custom messages.

When a recipient scans the QR code, a beautifully formatted message page opens where they can read the message and instantly reply through WhatsApp.

No backend.
No database.
No server-side programming.

Hosted entirely using GitHub Pages.

---

# Project Demo

Flow

You
│
├── Type your message
│
├── Generate QR
│
├── Send QR Image
│
▼

Recipient

│
├── Scan QR
│
├── Message Viewer Opens
│
├── Reads your message
│
└── Clicks "Reply on WhatsApp"

▼

WhatsApp Chat Opens

---

# Features

✔ Generate QR Codes

✔ Dynamic Messages

✔ Responsive Design

✔ WhatsApp Reply

✔ GitHub Pages Hosting

✔ Mobile Friendly

✔ Zero Backend

✔ Zero Database

✔ Free Forever

---

# Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## QR Generation

- QRCodeJS

https://github.com/davidshimjs/qrcodejs

Loaded through CDN.

---

## Hosting

GitHub Pages

Advantages

- Free
- HTTPS
- Global CDN
- No maintenance
- Unlimited usage for static websites

---

## Communication

WhatsApp Deep Link API

Uses

https://wa.me/

to launch WhatsApp directly.

---

# Architecture

                    +----------------------+
                    |  Generator Page      |
                    |  generator.html      |
                    +----------+-----------+
                               |
                               |
                     User types message
                               |
                               ▼
                     JavaScript encodes URL
                               |
                               ▼
                    QRCodeJS generates QR
                               |
                               ▼
                         QR Image Shared
                               |
                               ▼
                  Recipient scans QR Code
                               |
                               ▼
                    viewer.html opens
                               |
                               ▼
                 Message displayed nicely
                               |
                               ▼
               Reply on WhatsApp button
                               |
                               ▼
                   WhatsApp Deep Link
                               |
                               ▼
                  WhatsApp Chat Opens

---

# Folder Structure

qrdemo/

│

├── README.md

├── generator.html

├── viewer.html

├── style.css

├── app.js

---

# How It Works

Step 1

User enters a custom message.

Step 2

JavaScript URL-encodes the message.

Example

Hello World

becomes

Hello%20World

Step 3

The application creates a URL.

Example

https://yourusername.github.io/qrdemo/viewer.html?msg=Hello%20World

Step 4

QRCodeJS converts that URL into a QR Code.

Step 5

The QR image is shared.

Step 6

Recipient scans the QR.

Step 7

viewer.html extracts the message from the URL.

Step 8

Message is displayed.

Step 9

Recipient clicks

Reply on WhatsApp

Step 10

WhatsApp opens directly with a pre-filled reply template.

---

# Deployment

Hosted using GitHub Pages.

Repository

qrdemo

Deployment Source

main branch

Root folder

Live URL

Replace with your own URL

https://nagesh-repo.github.io/qrdemo/

---

# Advantages

No Login

No Backend

No Database

No Monthly Charges

No Server Maintenance

Works on

✔ Android

✔ iPhone

✔ Windows

✔ macOS

✔ Linux

Compatible with

✔ WhatsApp

✔ Microsoft Teams

✔ Outlook

✔ Gmail

✔ Telegram

✔ Any QR Scanner

---

# Future Enhancements

Planned

- Download QR Image
- Dark Mode
- Company Branding
- Logo inside QR
- Message Expiry
- Password Protected Messages
- Analytics
- Multiple Themes
- Rich Text Messages

---

# Version History

Version 1.0

Initial Release

Features

- QR Generation
- Dynamic Message Viewer
- WhatsApp Reply
- GitHub Pages Hosting

Version 2.0

Enhancements

- Cleaner UI
- Download QR
- Better WhatsApp Reply Context
- Responsive Improvements
- Improved Code Structure

---

# Browser Support

Google Chrome

Microsoft Edge

Safari

Firefox

Opera

Mobile Browsers

---

# License

MIT License

Feel free to use, modify and improve.

---

# Author

Developed by

Nagesh

Powered by

HTML

CSS

JavaScript

GitHub Pages

QRCodeJS

WhatsApp Deep Link
