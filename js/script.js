$(document).ready(function(){
  $(".header__ham").click(function(){
    $(this).toggleClass(active);
    $(this).next().toggleClass("onanimation");
    $("btn__contact").hide();
    $("btn__contact").each(function(i){
      $(this).delay(80 * i).fadeIn(500);
    }
    }
  }
}
