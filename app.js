var app  = require('./config/server');

var server = app.listen(80,function(){
    console.log('servidor on')
});

var io = require('socket.io').listen(server);

app.set('io',io);

io.on('connection',(socket) =>{
    socket.on('disconnect', () =>{
        
    });

    socket.on('msgServidor', (data) =>{
        /* dialogos */
        socket.emit('msgCliente',{apelido: data.apelido,msg: data.msgChat});
        socket.broadcast.emit('msgCliente',{apelido: data.apelido,msg: data.msgChat});
        
        /* participantes */
        if(parseInt(data.contador) == 0){
            socket.emit('participantesChat',{apelido: data.apelido});
            socket.broadcast.emit('participantesChat',{apelido: data.apelido});
        }
    });

})