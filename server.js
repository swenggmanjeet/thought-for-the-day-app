
const express = require('express');

const app = express();

app.use(express.static('./dist/thought-for-the-day-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/thought-for-the-day-app/'}),
);

app.listen(process.env.PORT || 8080);