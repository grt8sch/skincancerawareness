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
  }
  //Hide Content of Nav
  function hideContent(){
    resetSelectedInfo();
    selectedInfo.fadeOut(500);
  }
  displayContent();
  //Navigation
  var isFading = false;
  $(".nav-a").click(function(){
    if (isFading) {
        console.log("SPAM!");
        return;
    }
    if($(this).hasClass("selected") == false){
      isFading = true;
      hideContent();
      $(".nav-a").removeClass("selected");
      $(this).addClass("selected");
      displayContent();
      isFading = false;
    }
  });
});
