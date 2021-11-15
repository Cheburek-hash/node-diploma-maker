const { Router } = require("express");

const documentController = require("../controllers/document.controller");

const router = Router();

router.post(
  "/doc/create/pdf",
  [
    check("data")
      .exists()
      .withMessage("data is required")
  ],
  documentController.createPdf
);
