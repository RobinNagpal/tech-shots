var express = require('express');
var app = express();

app.use('/', express.static('/home/robin/workspace/active_projects/tech-shots/requireJS'));

app.listen(8000);