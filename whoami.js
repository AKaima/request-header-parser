var express = require('express')
var app = express()

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index.html')
})

app.get('/whoami', function(req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' })  
    res.end(JSON.stringify({
        "ipaddress": req.headers['x-forwarded-for'],
        "language": req.headers['accept-language'].split(",")[0],
        "software": req.headers['user-agent'].split("(")[1].split(")")[0]
    }))
})

app.listen(process.env.PORT)