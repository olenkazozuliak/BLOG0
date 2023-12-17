let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('hello');
});

app.listen(PORT, ()=>{
    console.log(`Server has been run on PORT ${PORT}...`);
});