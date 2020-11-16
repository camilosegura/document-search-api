const router = require('express').Router();
const { getInformation } = require(`${__basedir}/controllers/medical.controller`)

router
  .route('/')
  .get(getInformation);

module.exports = router;
