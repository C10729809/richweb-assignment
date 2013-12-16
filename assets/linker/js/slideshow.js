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
  $("#bannerImg").animate({opacity:0},"slow",function() { 
    $(this).load(function() { $(this).animate({opacity:1},"slow"); }); 
    $(this).attr("src", images[imgNum]); 
    imgNum++;
  }); 
}

var socket = io.connect('http://54.201.13.243:1337');
socket.on('connect', function(){
  socket.request('/chat',{}, function(result){
    for(var i in result){
          $("#msgList").prepend('<div><h4>'+result[i].username+": "+result[i].message+'</h4><div>');
    }

  });
});

socket.on('message', function(msg){
   $("#msgList").prepend('<div><h4>'+msg.data.username+': '+msg.data.message+'</h4><div>');
   console.log(msg);
});