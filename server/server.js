const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('dist'));


//Add new routes above
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

//GDC Deploy setup:
const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Algorithms live at http://${host}:${port}`);
});