const express = require('express');
const app = express();
const commons = require('./routes/commons');
const report = require('./routes/report');

const port = process.env.PORT || 8777;

app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', commons);
app.use('/report', report);

app.listen(port, () =>{
    console.log(`listening to port ${port}`);
});