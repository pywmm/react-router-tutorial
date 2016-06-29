var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()

app.use(compression())

// serve our static stuff like index.css
// add path.join here
app.use(express.static(__dirname,'public'))

// send all requests to index.html so browserHistory in React Router works
app.get('*',function(req, res) {
	// add drop 'public' in the middle of here
	res.sendFile(path.join(__dirname,'public','index.html'))
})

var PORT = process.env.PORT || 8080
app.listion(PORT, function() {
	console.log('Production express server running at localhost:' + PORT)
})