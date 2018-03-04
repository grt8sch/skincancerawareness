$(document).ready(function(){
  //Display Content of Nav
  function displayContent(){
    console.log($(".selected").index(".nav-a"));
    $(".info-content:eq("+$(".selected").index(".nav-a")+")").attr("style","display:block; opacity:1;");
  }
  //Hide Content of Nav
  function hideContent(){
    $(".info-content:eq("+$(".selected").index(".nav-a")+")").attr("style","display:none; opacity:0;");
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
