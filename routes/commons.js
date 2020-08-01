const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/create-report', (req, res) => {
    res.render('create_report');
});

module.exports = router;