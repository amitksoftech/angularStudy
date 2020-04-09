const express = require('express');

const path = require('path');
const app = express();

const members = [
{
    id: 1,
    name: 'Amit',
    email: 'amit@gmail.com',
    password: 'amit'   
},
{
    id: 2,
    name: 'Raju',
    email: 'raju@gmail.com',
    password: 'raju' 
}
];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get('/api/members',(req,res) => {
res.json(members);
});

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'public','index.html'));
});

const PORT = 5000;

app.listen(PORT,() => console.log('Server started on port ${PORT}'));