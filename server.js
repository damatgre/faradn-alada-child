//all required dependencies
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


//parse incoming string or array data, converst to key/value pairing
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//parse incoming JSON data
app.use(express.json());

//routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//set up port and console to show activity
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}.`);
})