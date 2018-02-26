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


// validation input
(function() {
    'use strict';
window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }