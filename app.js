const express = require('express');
var app = express();

app.get('/API/:code', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    var infos={name: "express", version: "4.17.1", code: req.params.code};
    res.end(JSON.stringify(infos));
});

app.listen(3000, () => {
    console.log('Server started...');
});