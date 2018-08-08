const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());


app.use('/', routes);

app.listen(3000, () => {
    console.log('server running');
})