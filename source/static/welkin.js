window.addEventListener("DOMContentLoaded", function() {
    var header_top = document.getElementsByClassName('header-top')[0];
    requestAnimationFrame(function() {
        header_top.classList.add("transition");
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction () {
    // if (document.getElementsByClassName("posts-container"[0].scrollTop > -120)) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 280) {
        document.getElementsByClassName("header-top")[0].classList.add("header-full");
    } else {
        document.getElementsByClassName("header-top")[0].classList.remove("header-full");
    }
}