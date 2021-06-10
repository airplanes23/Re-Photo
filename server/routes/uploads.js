const express = require('express');

const fileController = require('../controllers/fileController');

const uploadsRouter = express.Router();

// CODE BELOW IS FOR LOCAL JSON FETCH REQUESTS
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



// CODE BELOW IS FOR MONGO DB FETCH REQUESTS
/*
uploadsRouter.get(
  '/',
  mongoController.getUploads,
  (req, res) => res.status(200).json(res.locals.uploads)
  );
  
uploadsRouter.post(
  '/',
  mongoController.getUploads, //is this even required?
  mongoController.addUpload,
  (req, res) => res.status(200).json({}) // what are we sending back??
  )
*/

// keep this line!
module.exports = uploadsRouter;