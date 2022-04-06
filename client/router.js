'use strict';

const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send({msg: 'Get'});
});


module.exports = router;