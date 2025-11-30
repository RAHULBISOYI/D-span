const Tesseract = require("tesseract.js");

Tesseract.recognize("dna_report.png", "eng")
  .then(({ data: { text } }) => {
    console.log("OCR Result:", text);
  });
