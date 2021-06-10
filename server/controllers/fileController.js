const fs = require('fs');
const path = require('path');

const fileController = {};

fileController.getUploads = (req, res, next) => {
  try {
    const { results } = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../data/data.json'), 'UTF-8')
    );

    res.locals.uploads = results;
    return next();
    
  } catch(err) {
    return next({
      log: `Error in fileController.getUploads. ERROR: ${err}`,
      message: {
        err: 'Error in fileController.getUploads. ERROR: Check server logs for details'
      }
    });
  }
};

fileController.addUpload = (req, res, next) => {
  if (!res.locals.uploads && typeof res.locals.uploads !== 'object') {
    return next({
      log: 'Error in fileController.addUpload: ERROR: Expected res.locals.uploads to be an object',
      message: {
        err: 'Error in fileController.addUpload. ERROR: Check server logs for details'
      }
    })
  }
  try {
    // how do i add a new post to the res.locals.uploads object?
    // use the req.body to add user input to the post
    // check if the object is in the json file already? make it an array?

    res.locals.uploads.push(req.body);
  
    fs.writeFileSync(
      path.resolve(__dirname, '../data/data.json'),
      JSON.stringify({ results: res.locals.uploads }),
      'UTF-8'
    );
    return next();
  } catch(err) {
    return next({
      log: `Error in fileController.addUpload. ERROR: ${err}`,
      message: {
        err: 'Error in fileController.addUpload. ERROR: Check server logs for details'
      }
    });
  };
};



module.exports = fileController;