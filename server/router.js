const express = require('express');
const router = express.Router();

// Define paths.
// What we want to serve to the browser.
router.get('/', (req, res) => {
  res.send('server is up and running');
});

module.exports = router;
