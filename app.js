const btnGenerate = document.getElementById("btnGenerate");

btnGenerate.addEventListener("click", generateQR);

function generateQR() {

    const message = document.getElementById("txtMessage").value.trim();

    if (message === "") {
        alert("Please enter a message.");
        return;
    }

    // CHANGE THIS AFTER GITHUB PAGES IS READY
const baseURL =
    "https://nagesh-repo.github.io/qrdemo/Viewer.html";

    const url =
        baseURL +
        "?msg=" +
        encodeURIComponent(message);

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 250,
        height: 250
    });

}
