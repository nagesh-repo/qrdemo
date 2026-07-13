/*
======================================================

QR Message Generator
Version 2.0

Responsibilities

✔ Validate Message
✔ Generate QR
✔ Download QR Image

======================================================
*/

const btnGenerate = document.getElementById("btnGenerate");
const btnDownload = document.getElementById("btnDownload");

const txtMessage = document.getElementById("txtMessage");
const qrContainer = document.getElementById("qrcode");

/*
======================================================
Generate QR
======================================================
*/

btnGenerate.addEventListener("click", generateQR);

function generateQR() {

    const message = txtMessage.value.trim();

    if (message.length === 0) {

        alert("Please enter a message.");

        txtMessage.focus();

        return;

    }

    /*
    --------------------------------------
    Change ONLY if GitHub repository changes
    --------------------------------------
    */

    const baseURL =
        "https://nagesh-repo.github.io/qrdemo/Viewer.html";

    const finalURL =
        baseURL +
        "?msg=" +
        encodeURIComponent(message);

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {

        text: finalURL,

        width:250,

        height:250

    });

    btnDownload.style.display = "block";

}

/*
======================================================
Download QR
======================================================
*/

btnDownload.addEventListener("click", downloadQR);

function downloadQR(){

    const qrImage = qrContainer.querySelector("img");

    if(!qrImage){

        alert("Please generate a QR Code first.");

        return;

    }

    const link = document.createElement("a");

    link.href = qrImage.src;

    link.download = "QR_Message.png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}
