const express = require('express');
const router = express.Router();

const full_forms = {
    'CSE': 'Computer Science and Engineering',
    'MECH': 'Mechanical Engineering',
    'CIV': 'Civil Engineering',
    'ISE': 'Information Science and Engineering',
    'IT': 'Electronics and Instumentation',
    'ECE': 'Electronics and Communication',
    'IEM': 'Industrial Engineering and Management'
}

router.post('/create-report', (req, res) => {
    var data = req.body;
    data["branch"] = full_forms[data["branch"]];
    res.render('report/front_sheet', {details: req.body});
});

module.exports = router;