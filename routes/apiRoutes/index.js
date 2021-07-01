const router = require('express').Router();
const noteRoute = require('../apiRoute/noteRoute');

router.use(noteRoute);

module.exports = router;