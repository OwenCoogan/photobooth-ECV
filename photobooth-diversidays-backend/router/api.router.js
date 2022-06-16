const express = require('express');
const Controllers = require('../controllers/index');
class RouterClass{
    constructor(){
        this.router = express.Router();
    }
    routes(){
      this.router.post('/images/add', upload.single("file"), async (req, res) => {
        try {
          const { body, files } = req;
          for (let f = 0; f < files.length; f += 1) {
            await uploadFile(files[f]);
          }

          console.log(body);
          res.status(200).send('Form Submitted');
        } catch (f) {
          res.send(f.message);
        }
      });
    }

    init(){
        this.routes();
        return this.router;
    }
}
module.exports = RouterClass;
