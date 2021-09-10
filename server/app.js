const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello 4K!')
});

app.listen(port, () => {
  console.log(`listening at => http://localhost.com/${port}`)
})