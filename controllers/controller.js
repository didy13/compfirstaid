const path = require('path');

const download = (req, res) => {
    const fileName = 'CV.pdf';
    const directoryPath = path.join(__dirname, "../public/assets/");
  
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
  };
  module.exports = {
    download,
  };