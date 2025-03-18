const express = require('express');
const { linkSocialMedia, getLinkedAccounts } = require('./controllers');
const router = express.Router();

router.post('/link', linkSocialMedia);
router.get('/accounts', getLinkedAccounts);

module.exports = router;