const express = require('express');
const app = express();

app.get('/tempurate', function(req,res) 
	{res.send('24 c');
});

app.get('/humidity', function(req,res) 
	{res.send('48%');
});

app.listen(3000, function() {
	console.log('Serverlistening onport 3000');

});

