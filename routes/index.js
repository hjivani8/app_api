var express = require('express');
var router = express.Router();
const personal = require('../model/personal_details');
const education = require('../model/education');

/* GET home page. */
router.post('/personal_details', async function(req, res, next) {

    // console.log(req.body);

    try {

      const userdata = await personal.create(req.body);

      res.status(200).json({

        "status":"successful",
        data:userdata

      })
      console.log(userdata);
      
    } catch (error) {
      
        res.send(error.message)

    }

});

router.get('/personal_details', async function(req, res, next) {

  // console.log(req.body);

  try {

    const userdata = await personal.find(req.body);

    res.status(200).json({

      "status":"successful",
      data:userdata

    })
    console.log(userdata);
    
  } catch (error) {
    
      res.send(error.message)

  }

});


router.post('/education', async function(req, res, next) {

  console.log(req.body);

  try {

    const userdata1 = await user.create(req.body);

    res.status(200).json({

      "status":"successful",
      data:userdata1

    })
    
  } catch (error) {
    
      res.json({
        error
      })

  }

});
module.exports = router;
