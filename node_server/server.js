var http = require('http');
var formidable = require("formidable");
var util = require('util');

var server = http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if (req.method.toLowerCase() == 'post') {
    processForm(req, res);
    return;
  }

  if (req.method.toLowerCase() == 'get') {
    var data = {
      data: {
        languages: [
          'English',
          'Kannada',
          'Hindi',
          'Other'
        ]
      }
    };
    var responseData = JSON.stringify(data);
    res.end(responseData);
    console.log("languages");
    console.log(responseData);
    return;
  }

  res.end();
});


function processForm(req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields) {

    res.writeHead(200, {
      'content-type': 'text/plain'
    });

    fields.id = 'ABB123';

    var data = JSON.stringify({
      fields: fields
    });

    res.end(data);

    console.log('posted fields');
    console.log(data);
  });
}

var port = 3100;
server.listen(port);
console.log("server listening on port " + port);
