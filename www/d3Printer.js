var exec = require('cordova/exec');

module.exports = {

    printerInit: function (resolve, reject) {
        exec(resolve, reject, "d3Printer", "printerInit", []);
    },
    printString: function (text, qrCodeData, extraOrder, resolve, reject) {
        exec(resolve, reject, "d3Printer", "printString", [text, qrCodeData, extraOrder]);
    },
     printBitmap: function (base64Data, width, height, resolve, reject) {
        exec(resolve, reject, "d3Printer", "printBitmap", [base64Data, width, height]);
    },
    printBarCode: function (barCodeData, resolve, reject) {
        exec(resolve, reject, "d3Printer", "printBarCode", [barCodeData]);
    },
    printQRCode: function (qrCodeData, resolve, reject) {
        exec(resolve, reject, "d3Printer", "printQRCode", [qrCodeData]);
    },
}
