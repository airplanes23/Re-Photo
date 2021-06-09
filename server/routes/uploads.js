const express = require('express');

const fileController = require('../controllers/fileController');

const uploadsRouter = express.Router();

// uploadsRouter.post(
//   '',           // path will be submit button? check prev units that involved adding character via button
//   fileController.getUploads,
//   fileController.addUpload,
//   (res, res) => res.statusCode(200).json({ uploads: res.locals.uploads })
// );

// uploadsRouter.delete()