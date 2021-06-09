const express = require('express');

const fileController = require('../controllers/fileController');

const uploadsRouter = express.Router();

uploadsRouter.get(
  '/',
  fileController.getUploads,
  (req, res) => res.status(200).json( res.locals.uploads )
);

  
// uploadsRouter.post(
//   '',           // path will be submit button? check prev units that involved adding character via button
//   fileController.getUploads,
//   fileController.addUpload,
//   (res, res) => res.statusCode(200).json({ uploads: res.locals.uploads })
// );

// uploadsRouter.delete()

module.exports = uploadsRouter;