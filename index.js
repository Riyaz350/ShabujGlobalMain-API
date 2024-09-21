const express = require('express');
const app = express();
const PORT = process.env.PORT || 5003;
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors({

    origin:[ 'http://localhost:5173',
            'http://localhost:5174',
            'https://shabuj-global-bot.web.app'
           ],
    credentials:true

}
))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('./routes/dialogFlowRoutes')(app);
require('./routes/mongoDBRoutes')(app);


app.listen(PORT)