$(document).ready(function() {

  $('.header').on('scroll', function() {
    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
      alert('end reached');
     }
   });

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    var windowHeightShortened = $(window).innerHeight() - 80;
	});



  //TILES

  var margin = $('.item-section').innerWidth();
  var marginPercent = (margin / 100) * 1;

  //8 and two 4s
  var mediumHeightTop = $('.item-medium-top').innerHeight();
  var mediumHeightBottom = $('.item-medium-bottom').innerHeight();
  var totalMediumHeight = mediumHeightTop + mediumHeightBottom + marginPercent + 2;
  $('.item-large').innerHeight(totalMediumHeight);

  //Two 3s and 6
  var smallHeightTop = $('.item-small-top').innerHeight();
  var smallHeightBottom = $('.item-small-bottom').innerHeight();
  var totalSmallHeight = smallHeightTop + smallHeightBottom + marginPercent + 2;
  $('.item-middle').innerHeight(totalSmallHeight);

  //HEADLINE

  var hed = $('.news-featured .headline').text();
  var hedCharCount = hed.length;
  var hedWordCount = hed.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;

  if (hedCharCount > 60) {
    $('.news-featured .headline').css('margin', '100px 10% 0px').css('width', '75%');
    $('.news-featured .headline span').css('font-size', '5.7rem');
  } else if (hedCharCount > 40) {
    $('.news-featured .headline').css('margin', '200px 10% 0px');
  }

  //DATE

  //var d = new Date("October 13, 2014 11:13:00");
  //var now = new Date();
  //var difference = Math.floor((now - d) / (1000*60*60*24));
  //document.getElementById('demo-now').innerHTML = now;
  //document.getElementById("demo").innerHTML = d;
  //document.getElementById('demo-difference').innerHTML = difference + " days ago";


});

$(document).delay(400).queue(function(){
    $("#ticker").removeClass( "hidden" ).ticker({
        cursorList:  "|",
        rate:        100
    }).trigger("play").trigger("stop");
});
