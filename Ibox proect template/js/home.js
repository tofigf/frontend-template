$(document).ready(function () {
 
//   video not slider but work very well!
    setTimeout(function() {
        $("#myVideo").show();
        $(".overlay").hide();
        $("#topnav").hide();
        $("#navbar2").hide();
     
      }, 6000);
      setTimeout(function() {
        $("#myVideo").hide();
        $(".overlay").show();
        $("#topnav").show();
        $("#navbar2").show();
      },45000 );


//   when scroll down video and audio will stop
      $(window).scroll(function () {
        console.log($(this).scrollTop());
   
        if ($(this).scrollTop() > 500) {
            $("#myVideo").hide();
            $(".overlay").show();
            audio.pause();
            $("#topnav").show();
            $("#navbar2").show();
        } 
    });
    // audio
    var audio = document.querySelector("#audio");
    setTimeout(function () {
        audio.play();
      });
      setTimeout(function () {
        audio.pause();
      },45000);

   
    // intro

    function setIntroPadding() {
        $("#intro").css("height", $(window).height() + "px");
    }
    setIntroPadding();

    $(window).resize(function () {
        setIntroPadding();
    });

    // owl slider
    $(".mazqi").owlCarousel({
        items: 1,
        singleItem: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
    });
    // owl carusel
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: false
    });
    // scrolled back fixed navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".blackfixed").addClass("scrolled");
            $(".navbar-light").addClass("navscroll");
        } else {
            $(".blackfixed").removeClass("scrolled");
            $(".navbar-light").removeClass("navscroll");
        }
    });
    // owl width
    function setIntroPadding() {
        $("#owl").css("width", $(window).width() + "px");
    }
    setIntroPadding();

    $(window).resize(function () {
        setIntroPadding();
    });

    //  isotope
$().fancybox({
    selector : '.element-item:visible > a'
  })
  
  // Init Isotope
  var $grid = $('.grid').isotope({
    // options
  });
  
  // Filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    $grid.isotope({ filter: $(this).attr('data-filter') });
  });
  
    // back to top
    var $go = $("#go-top");
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 500) {
            $go.show();
        } else {
            $go.hide();
        }
    });
    $go.on("click", function () {
        $("html,body").animate({ scrollTop: 0 }, 900)
    });


    // Text-Counter
    if ($(".progress-bar").length) {
        $(".progress-bar").each(function () {
            var self = $(this);
            var to = $(this).attr("aria-valuenow");

            var from = 0;
            var interval = setInterval(function () {
                from++;
                self.parent().prev().text(from);
                if (from == to) {
                    clearInterval(interval);
                }
            }, 30);
        });
    }

    if ($(".progress-bar2").length) {
        $(".progress-bar2").each(function () {
            var self = $(this);
            var to = $(this).attr("aria-valuenow");

            var from = 2054;
            var interval = setInterval(function () {
                from++;
                self.parent().prev().text(from);
                if (from == to) {
                    clearInterval(interval);
                }
            }, 30);
        });
    }
    if ($(".progress-bar3").length) {
        $(".progress-bar3").each(function () {
            var self = $(this);
            var to = $(this).attr("aria-valuenow");

            var from = 1400;
            var interval = setInterval(function () {
                from++;
                self.parent().prev().text(from);
                if (from == to) {
                    clearInterval(interval);
                }
            }, 30);
        });
    }
    if ($(".progress-bar4").length) {
        $(".progress-bar4").each(function () {
            var self = $(this);
            var to = $(this).attr("aria-valuenow");

            var from = 79;
            var interval = setInterval(function () {
                from++;
                self.parent().prev().text(from);
                if (from == to) {
                    clearInterval(interval);
                }
            }, 30);
        });
    }
});

//    footer input validation
document.querySelector("#subscribe-form").addEventListener("submit", function (event) {
    var requiredIn = document.querySelectorAll("#subscribe-form .required");
    var spans = document.querySelectorAll("#subscribe-form .input span");
    for (var i = 0; i < spans.length; i++) {
        spans[i].parentNode.removeChild(spans[i]);
    }
    errorCount = 0;
    for (var i = 0; i < requiredIn.length; i++) {
        if (requiredIn[i].value == "") {
            requiredIn[i].parentNode.classList.add("has-error");
            var span = document.createElement("SPAN");
            span.innerText = requiredIn[i].getAttribute("required-message");
            requiredIn[i].parentNode.appendChild(span);
            errorCount++;

        } else {
            requiredIn[i].parentNode.classList.remove("has-error");
        }
    }
    if (errorCount == 0) {
        return true;
    }
    event.preventDefault();
});



