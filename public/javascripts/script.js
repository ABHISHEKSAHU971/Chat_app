

var socket = io();

var username = "default";
var txtmsg = "";
    
function show(){
  var txtmsg =  document.querySelector('textarea').value ;
  socket.emit('msg', {txtmsg: txtmsg , username:username})
  document.querySelector('textarea').value = ""
}

 document.querySelector("#msg").addEventListener('click',function(){
    show() 
 }) 
 document.querySelector('textarea').addEventListener('keyup',function(dets){
   if(dets.keyCode === 13){
     show();
   }
 })

 socket.on('onlineuser',function(len){
    document.querySelector('span').textContent = len;

  })
socket.on('reply', function (msgs) {
    console.log(msgs)
     document.querySelector('.msg').innerHTML +=  `<div class="txt"><p>  ${msgs.txtmsg} </p> </div> `

  })

document.querySelector('#enter').addEventListener('click', function (dets) {
  var username = document.querySelector('input').value 
  document.querySelector('#overlay').style.display ="none"
  socket.emit('user', username) 
  })