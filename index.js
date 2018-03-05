$(document).ready(function(){
  var selectedInfo = $(".info-content:eq("+$(".selected").index(".nav-a")+")");
  function resetSelectedInfo(){
    selectedInfo = $(".info-content:eq("+$(".selected").index(".nav-a")+")");
  }
  $(".info-content").hide();
  $(".selectedInfo").show();
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
        return;
    }
    if($(this).hasClass("selected") == false){
      isFading = true;
      hideContent();
      $(".nav-a").removeClass("selected");
      $(this).addClass("selected");
      displayContent();
      setTimeout(function() {
        isFading = false;
      }, 500);
    }
  });
  //Navigation Scroll Top
  $(window).scroll(function(){
    console.log("Scrolling...");
    console.log("Scroll Value = " + $(window).scrollTop());
    console.log("Navigation offset =" + $("#navfiller").offset().top);
    if($(window).scrollTop() > $("#navfiller").offset().top)){
      console.log("fixed");
      $("#mainnav").addClass("fixed").removeClass("posstatic");
      $("#navfiller").height($("#mainnav").height());
    }else{
      console.log("static");
      $("#mainnav").addClass("posstatic").removeClass("fixed");
      $("#navfiller").height(0);
    }
  });
});
