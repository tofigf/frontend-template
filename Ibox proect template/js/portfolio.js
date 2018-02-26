$(document).ready(function () {
    // function setIntroPadding() {
    //     $("#parallax").css("height", $(window).height() + "px");
    // }
    // setIntroPadding();

    // $(window).resize(function () {
    //     setIntroPadding();
    // });
    $(window).scroll(function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 50) {
            $(".blackfixed").addClass("scrolled");
            $(".navbar-light").addClass("navscroll");
        } else {
            $(".blackfixed").removeClass("scrolled");
            $(".navbar-light").removeClass("navscroll");
        }
    });


    $('#carouselExampleControls').carousel({
        interval: 3000,
        cycle: true
    });


    // back to top
    var $go = $("#go-top");
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 700) {
            $go.show();
        } else {
            $go.hide();
        }
    });
    $go.on("click", function () {
        $("html,body").animate({ scrollTop: 0 }, 900)
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
