$(document).ready(function(){
  var selectedInfo = $(".info-content:eq("+$(".selected").index(".nav-a")+")");
  function resetSelectedInfo(){
    selectedInfo = $(".info-content:eq("+$(".selected").index(".nav-a")+")");
  }
  $(".info-content").hide();
  $(".selectedInfo").show(0);
  //Display Content of Nav
  function displayContent(){
    resetSelectedInfo();
    selectedInfo.delay(500).fadeIn(500);
    $("body").css("overflow","visible")
  }
  //Hide Content of Nav
  function hideContent(){
    $("body").css("overflow","none")
    resetSelectedInfo();
    selectedInfo.fadeOut(500);
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
