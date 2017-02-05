$(document).ready(function(){

  //function setHeight() {
    //var windowHeight = $(window).innerHeight();
    //var halfWindow = windowHeight / 2;
    //$('.main').css('min-height', halfWindow);
    //$('.transparency').css('min-height', halfWindow);
  //};
  //setHeight();
  //console.log(windowHeight);

   var scroll_start = 0;
   var startchange = $('.container-main');
   var offset = startchange.offset();

    if (startchange.length){
     $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $(".navbar-nav > li > a")
              .css('padding-top', '20px')
              .css('padding-bottom', '20px')
              .css('-webkit-transition', 'padding-top .25s ease-in-out')
              .css('-webkit-transition', 'padding-bottom .25s ease-in-out')
              .css('transition', 'padding-top .25s ease-in-out')
              .css('transition', 'padding-bottom .25s ease-in-out');
            $('.navbar-brand img').attr('src','images/RoundballLogo-Small.svg');
            $('.navbar-brand').css('padding-top', '15px');
         } else {
            $(".navbar-nav > li > a")
              .css('padding-top', '30px')
              .css('padding-bottom', '30px');
            $('.navbar-brand img').attr('src','images/RoundballLogo-New.svg');
            $('.navbar-brand').css('padding-top', '5px');
         }
     });
    }

});
