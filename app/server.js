const cow = require("./services/cow.service")

const express = require('express')
const helmet = require("helmet");
const path = require('path');


const app = express()
app.disable('x-powered-by');
app.use(helmet());

const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/cow", function (req, res) {
  res.send(cow.cow_say(req));
})

app.get("/customer", function (req, res) {
  res.sendFile(path.join(__dirname, '/services/customer/list_customer.html'));
})

app.get('/static/customer.service.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/services/customer/customer.service.js'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})