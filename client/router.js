const {Router} = require('express');

const router = Router();

router.get('/dummy', (req, res) => {
  console.log(req, res)
});


module.exports = router;