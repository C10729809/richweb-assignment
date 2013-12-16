var images = ["../images/hgbanner.jpg","../images/grav_image.jpg","../images/thecouncelor.jpg"];

var imgNum = 0;
var imgLength = images.length -1;
var intv;

$( document ).ready(function() {
     imgNum = Math.floor((Math.random()*imgLength)+1);
     document.getElementById('bannerImg').src = images[imgNum];    
});

$(function(){
    intv = setInterval(function(){showImage()},5000);  
    //clearInterval(intv); 
    return false;
});

function showImage()
{
   if (imgNum > imgLength) {
        imgNum = 0;
    }
    if (imgNum < 0) {
        imgNum = imgLength;
    }
  //document.getElementById('bannerImg').src = images[imgNum];
  $("#bannerImg").animate({opacity:0},"slow",function() { 
    $(this).load(function() { $(this).animate({opacity:1},"slow"); }); 
    $(this).attr("src", images[imgNum]); 
    imgNum++;
    //clearInterval(intv);
  }); 
}

var socket = io.connect('http://localhost:1337');
socket.on('connect', function(){
  //socket.emit('chatroom', "chat connected");
  socket.request('/chat',{}, function(result){
    for(var i in result){
	  $("#msgList").append('<li>'+result[i].message+'<li>');
    }

  });
});

socket.on('message', function(msg){
   //alert('message received: ');
   $("#msgList").prepend('<li>'+msg.data.message+'<li>');
   console.log(msg);
});



