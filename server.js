const express = require('express');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const app = express();
const port = process.env.PORT || 5000;
const adapter = new FileSync('data.json');
const db = low(adapter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/content', (req, res) => {
  res.send({ data: db.get('content') });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
