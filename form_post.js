const http = require('http');
const qs = require('querystring');
const fs = require('fs');

http.createServer(function (req, res) {

    
    console.log(req.url)
    console.log(req.method)

            if(req.url === "/" && req.method === "GET"){

                   
                    fs.readFile("login_form.html", (err, data) => {
                            if (err) {
                                res.writeHead(404, {'Content-Type': 'text/html'});
                                return res.end("404 Not Found");
                            }
                                res.writeHead(200, {'Content-Type': 'text/html'});
                                res.write(data);
                                return res.end();
                    });
                }

            if(req.url === "/create-user/" && req.method === "POST"){

             
                let requestBody = '';
                req.on('data', function(data) {
                requestBody += data;
                console.log(requestBody)
                });

                req.on('end', function() {
                const formData = qs.parse(requestBody);
                console.log(formData)
                if( formData.username)
                {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('<p>'+formData.username+'</p>');
                res.end();
                } 
                })
            }
}).listen(4000);
console.log('server jalan')