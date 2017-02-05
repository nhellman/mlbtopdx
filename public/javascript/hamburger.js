
  var $hamburger = $(".hamburger");
  var $menuItem = $("#fly-nav ul li");
  var $menu = $("#fly-nav");
  var $main = $("main");

  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $menu.toggleClass("open");
    $menuItem.toggleClass("open");
  });

  $menuItem.on("click", function(e) {
    $menu.toggleClass("open");
    $hamburger.toggleClass("is-active");
  });
