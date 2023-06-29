import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api'

require('dotenv').config();
var morgan = require('morgan')

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined'))

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

// init API route
initAPIRoute(app);

//handle 404 not found
app.use((req, res) => {
    return res.render('404.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})