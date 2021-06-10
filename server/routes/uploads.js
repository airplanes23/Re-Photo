const express = require('express');

const fileController = require('../controllers/fileController');

const uploadsRouter = express.Router();

uploadsRouter.get(
  '/',
  fileController.getUploads,
  (req, res) => res.status(200).json( res.locals.uploads )
);

  
uploadsRouter.post(
  '/',           // path will be submit button? check prev units that involved adding character via button
  fileController.getUploads,
  fileController.addUpload,
  (req, res) => res.status(200).json({ results: res.locals.uploads })   // results? uploads? photos??
);

// uploadsRouter.delete()

module.exports = uploadsRouter;