var images = ["../images/hgbanner.jpg","../images/grav_image.jpg","../images/thecouncelor.jpg"];

var imgNum = 0;
var imgLength = images.length -1;

$(document).ready(function() {
 	imgNum = Math.floor((Math.random()*imgLength)+1);
    	document.getElementById('bannerImg').src = images[imgNum];
});

$(function(){
    setInterval(function(){showImage()},3000);   
    return false;
});

function showImage()
{	
   imgNum++;
   if (imgNum > imgLength) {
        imgNum = 0;
    }
    if (imgNum < 0) {
        imgNum = imgLength;
    }

 // document.getElementById('showBanner').src = images[imgNum];
  document.getElementById('bannerImg').src = images[imgNum];
}


