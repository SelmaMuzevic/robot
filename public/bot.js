let express = require('express');
let app = express();

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

app.get('/bot/left', function(req, res) {
    res.send('Turn left!');
});
app.get('/bot/right', function(req, res) {
    res.send('Turn right!');
});
app.get('/bot/forward', function(req, res) {
    res.send('Go forward!');
});
app.get('/bot/backward', function(req, res) {
    res.send('Go backward!');
});
app.get('/bot/stop', function(req, res) {
    res.send('Stop!');
});