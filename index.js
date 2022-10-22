const express = require('express');

 // Create a webserver
 const app = express();

 app.use(express.static('public'));

 // Start the web server at port 3000
app.listen(3000, ()=>{
    console.log('server started at http://localhost:3000')
})