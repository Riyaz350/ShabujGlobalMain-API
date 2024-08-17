const express = require('express');
const app = express();
const PORT = process.env.PORT || 5003;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('./routes/dialogFlowRoutes')(app);


app.listen(PORT)