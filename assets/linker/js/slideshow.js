var canvas, ctx;
var aImages = [];
var iCurSlide = 0;

$(function(){
    // creating canvas objects
    canvas = document.getElementById('slideshow');
    ctx = canvas.getContext('2d');

    // collect all images
    $('.slides').children().each(function(i){
        var oImg = new Image();
        oImg.src = this.src;
        aImages.push(oImg);
    });

    // draw first image
    ctx.drawImage(aImages[iCurSlide], 0, 0);

    var iTimer = setInterval(changeImage, 5000); // set inner timer
});

function changeSlideTimer() {
    iCurSlide++;
    if (iCurSlide == $(aImages).length) {
        iCurSlide = 0;
    }
}


