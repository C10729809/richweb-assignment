var images = ["../images/hgbanner.jpg","../images/grav_image.jpg","../images/thecouncelor.jpg"];
var imgNum = 0;
var imgLength = images.length -1;
var intv;
//////////////////////////////////////////////////////////////////////////
/// Slide show code for fading in/out the banner and changing image //////
$( document ).ready(function() {
     //start with random image
     imgNum = Math.floor((Math.random()*imgLength)+1);
     document.getElementById('bannerImg').src = images[imgNum];    
});

$(function(){
    //call showImage every 5 seconds
    intv = setInterval(function(){showImage()},5000);  
    return false;
});
//showImage is responsable for fading and changing the image 
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
/// End of slideshow code   /////////////////////////////////////////
/////////////////////////////////////////////////////////////////////


//connect to socketio and get the list of messages from the database
//and populate the message list
var socket = io.connect('http://localhost:1337');
socket.on('connect', function(){
  socket.request('/chat',{}, function(result){
    for(var i in result){
	  $("#msgList").prepend('<li>'+result[i].message+'<li>');
    }

  });
});

//listen for message event and append the new message to message list
socket.on('message', function(msg){
   //alert('message received: ');
   //$("#msgList").prepend('<li>'+msg.data.message+'<li>');
   $("#msgList").prepend('<li>'+msg.data.username+': '+msg.data.message+'<li>');
   console.log(msg);
});



