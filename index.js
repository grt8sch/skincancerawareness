$(document).ready(function(){
  var selectedInfo = $(".info-content:eq("+$(".selected").index(".nav-a")+")");
  function resetSelectedInfo(){
    selectedInfo = $(".info-content:eq("+$(".selected").index(".nav-a")+")");
  }
  $(".info-content").hide();
  $(".selectedInfo").show();
  //Display Content of Nav
  function displayContent(){
    console.log($(".selected").index(".nav-a"));
    resetSelectedInfo();
    selectedInfo.show(500);
  }
  //Hide Content of Nav
  function hideContent(){
    resetSelectedInfo();
    selectedInfo.hide(500);
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
