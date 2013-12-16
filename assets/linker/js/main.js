var images = ["../images/hgbanner.jpg","../images/grav_image.jpg","../images/thecouncelor.jpg"];
var imgNum = 0;
var imgLength = images.length -1;
var intv;

$( document ).ready(function() {
     //start of the slideshow with a random image from the list
     imgNum = Math.floor((Math.random()*imgLength)+1);
     document.getElementById('bannerImg').src = images[imgNum];    
});

$(function(){
    //call show image every 5 seconds
    intv = setInterval(function(){showImage()},5000);  
    return false;
});

//showImage() is responsable for fading in/out the image and changing it
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
<<<<<<< HEAD
//End of slideshow code
=======
// End of slideshow code
>>>>>>> dd3396de6c23f93f6105f84fdabf7c8dd3746a7e


// connect to socket and retrive the list of chat messages from the database
var socket = io.connect('http://localhost:1337');
socket.on('connect', function(){
  socket.request('/chat',{}, function(result){
    for(var i in result){
	  $("#msgList").prepend('<div><h4>'+result[i].username+": "+result[i].message+'</h4><div>');
    }

  });
});

// listen for new messages and add them to the list when they come in
socket.on('message', function(msg){
   //alert('message received: ');
   $("#msgList").prepend('<div><h4>'+msg.data.username+': '+msg.data.message+'</h4><div>');
   console.log(msg);
});



