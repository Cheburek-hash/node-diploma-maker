const { validationResult } = require("express-validator");

const PdfPrinter = require("pdfmake");
const fs = require("fs");

const fonts = {
  Roboto: {
    normal: "../public/assets/fonts/Urbanist-Black.ttf",
    bold: "../public/assets/fonts/Urbanist-Bold.ttf",
    italics: "../public/assets/fonts/Urbanist-Italic.ttf",
    bolditalics: "../public/assets/fonts/Urbanist-MediumItalic.ttf",
  },
};

class DocumentController {
  createPdf(req, res) {
    try {
        const validator = validationResult(req);

        const {data, headers} = req.body;
       
       if (validator.isEmpty()){
           
        const printer = new PdfPrinter(fonts);
        const docDefinition = {
          content: [{ image: testImageDataUrl }]
        };
    
        const options = headers;
    
        const pdfDoc = printer.createPdfKitDocument(docDefinition, options);
        pdfDoc.pipe(fs.createWriteStream("document.pdf"));
        pdfDoc.end();
            res.status(200).json({token: token, userId: user.id});
            return;
        }
        res.status(400).json({error: validator.errors.shift()})
        return;
    } catch (error){ res.status(500).json([{msg: "Something went wrong, try one more time"}, {dev_message: error.message}])}
                        
        
    
  }
}
