$(document).ready(function(){
  var selectedInfo = $(".info-content:eq("+$(".selected").index(".nav-a")+")");
  function resetSelectedInfo(){
    selectedInfo = $(".info-content:eq("+$(".selected").index(".nav-a")+")");
  }
  //Display Content of Nav
  function displayContent(){
    console.log($(".selected").index(".nav-a"));
    resetSelectedInfo();
    selectedInfo.attr("style","display:block; opacity:1;");
  }
  //Hide Content of Nav
  function hideContent(){
    resetSelectedInfo();
    selectedInfo.attr("style","opacity:0; display:none;");
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
