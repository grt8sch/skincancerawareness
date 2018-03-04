$(document).ready(function(){
  //Display Content of Nav
  function displayContent(){
    $(".info-content:eq("+$(".nav-a").index(".selected")+")").css("opacity","1");
  }
  displayContent();
  //Navigation
  $(".nav-a").click(function(){
    $(".nav-a").removeClass("selected");
    $(this).addClass("selected");
    displayContent();
  });
});
