$(document).ready(function () {
    
    
  $('.container').mousemove(function(e){

    var x = e.pageX + 'px';
    var y = e.pageY + 'px';

    $('.cursor').css({'top':y, 'left':x});

});

  var images = new Array('img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg');

  setInterval(function(){

    var random = images[Math.floor(Math.random() * images.length )];
    $('.img').css('background','url(' + random + ')');

  },2500);

});
