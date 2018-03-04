$(document).ready(function(){
  var selectedInfo = $(".info-content:eq("+$(".selected").index(".nav-a")+")");
  function resetSelectedInfo(){
    selectedInfo = $(".info-content:eq("+$(".selected").index(".nav-a")+")");
  }
  //Display Content of Nav
  function displayContent(){
    console.log($(".selected").index(".nav-a"));
    resetSelectedInfo();
    selectedInfo.css("display","block");
    selectedInfo.css("opacity","1");
  }
  //Hide Content of Nav
  function hideContent(){
    resetSelectedInfo();
    selectedInfo.css("opacity","0");
    selectedInfo.css("display","none");
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
