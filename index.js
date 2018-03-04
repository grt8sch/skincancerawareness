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
    $("body").delay(500).queue(function (next) { 
      $(this).css("overflow", "visible");
      next(); 
    });
  }
  //Hide Content of Nav
  function hideContent(){
    $("body").css("overflow","hidden");
    resetSelectedInfo();
    selectedInfo.fadeOut(500);
  }
  displayContent();
  //Navigation
  $(".nav-a").click(function(){
    if($(this).hasClass("selected") == false){
      hideContent();
      $(".nav-a").removeClass("selected");
      $(this).addClass("selected");
      displayContent();
    }
  });
});
