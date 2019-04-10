let express = require("express")
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('an user connected');

  socket.on("display card", function(card) {
    io.emit("display card", card)
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
