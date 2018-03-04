$(document).ready(function(){
  //Display Content of Nav
  function displayContent(){
    $(".info-content:eq("+$(".nav-a").index(".selected")+")").css("opacity","1");
  }
  //Hide Content of Nav
  function hideContent(){
    $(".info-content:eq("+$(".nav-a").index(".selected")+")").css("opacity","0");
  }
  displayContent();
  //Navigation
  $(".nav-a").click(function(){
    hideContent();
    $(".nav-a").removeClass("selected");
    $(this).addClass("selected");
    displayContent();
  });
});
