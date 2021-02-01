const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

const users = [];

app.use(express.json());

app.post('/reg', (req, res) => {
  if (users.every((obj) => obj.login !== req.body.login)) {
    users.push(req.body)
  }
  console.log(users);
  res.sendFile(__dirname + '/public' + '/index.html')
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});