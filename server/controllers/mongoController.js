const { Uploads } = require("../models/uploadModels");

const mongoController = {};

mongoController.getUploads = async (req, res, next) => {
  try {
    const uploads = await Uploads.find({});
    res.locals.characters = uploads;
    return next();
  } catch (err) {
    return next({
      log: "error in mongoController.getUploads",
      message:
        "Error occured in startWarsController.getCharacters. Check server logs for more details.",
    });
  }
};

mongoController.addUpload = async (req, res, next) => {
  try {
    const newUpload = await Uploads.create(req.body);
    res.status(200).send(newUpload);
  } catch (err) {
    return next({
      log: "error in mongoController.addUpload",
      message: "check server logs",
    });
  }
};
