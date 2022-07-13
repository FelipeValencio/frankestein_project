const express = require('express')
const helmet = require("helmet");
var cowsay = require("cowsay");

const app = express()
app.disable('x-powered-by');
app.use(helmet());

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/cow", function (req, res) {
    let text;
  
    text = req.query.text;
    
    if(text == undefined)
        text = "Hi please dont hack me!";
    
    const responseText = `
      <pre>${cowsay.say({ text })}</pre>
      <br/><br/>
    `;
  
    res.send(responseText);
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})