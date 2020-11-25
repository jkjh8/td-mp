module.exports = function(io){
  io.on('connection', function (socket) {
    console.log("socket connect")
    console.log(mainPageStatus)
    socket.emit('reconnectstatus', mainPageStatus)
    socket.on('getStatus', function () {
      socket.emit('reconnectstatus', mainPageStatus)
    });
  });
}
