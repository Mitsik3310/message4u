
    $(document).ready(function() {
    var NavY = $('#top_bar').offset().top;
     
    var stickyNav = function(){
    var ScrollY = $(window).scrollTop();
        
    if (ScrollY > NavY) { 
      $('#top_bar').addClass('sticky');
    } else {
      $('#top_bar').removeClass('sticky'); 
    }
    };
     
    stickyNav();
     
    $(window).scroll(function() {
      stickyNav();
    });
    });

    