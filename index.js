const express = require('express');
const cors = require('cors');
const routerApi = require('./routes')
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res)=>{
  res.send("im your server and im running");
});



routerApi(app)


app.listen(port, ()=>{
  console.log(`run in port ${port}`);
});

