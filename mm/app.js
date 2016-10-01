var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + '/client'));

serv.listen(2000);
console.log('Server started');



//let the server know we have a socket connection
var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
    //log here so we know someone connected to the server
    console.log('socket connection');

    // var m_numberOfPlayers = 0;
    // m_numberOfPlayers++;
    //
    // //send a message to the client
    // socket.on('start',function(){
    //   console.log('starting');
    //   console.log('number of players: ' + m_numberOfPlayers);
    // });
    //
    // //send some data from the clien to the server
    // socket.on('data', function(data){
    //   console.log('sent data:' + data.reason);
    // });

    // //emit a message to the clients
    // socket.emit('servermsg',{
    //   msg:'hello',
    // });

    // //send a message to the client
    socket.on('log',function(){
      console.log('starting');
    });

});
