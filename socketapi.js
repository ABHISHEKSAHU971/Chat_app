const io = require( "socket.io" )();
const socketapi = {
    io: io
};

var online = [];
  
// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log("A user connected");
    
   
    
    online.push(socket.id)
    io.emit('onlineuser', online.length)
    
    socket.on('msg', function (dets) {
        io.emit('reply', dets); 
        console.log(dets);
    })
   


    socket.on("disconnect", function () {
        console.log("user disconnected !")
        online.splice(online.indexOf(socket.id), 1)
        io.emit('onlineuser',online.length)

        
    })
});
// end of socket.io logic

module.exports = socketapi;