const router = require('express').Router();
const medicalRoutes = require('./medical.routes');

router.use('/medical', medicalRoutes);

module.exports = router;
