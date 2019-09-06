const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require('./admin');

const rootDir = require('../util/path');

router.get('/',(req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Frank Shop'});
});

module.exports = router;