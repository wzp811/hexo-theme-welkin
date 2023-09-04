// 解决firefox中刷新页面触发transition
window.addEventListener("DOMContentLoaded", function() {
    var header_top = document.getElementsByClassName('header-top')[0];
    requestAnimationFrame(function() {
        header_top.classList.add("transition");
    });
});

// 上下滚动页面header-top动画
window.onscroll = function() {scrollFunction()};
function scrollFunction () {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 280) {
        document.getElementsByClassName("header-top")[0].classList.add("header-full");
    } else {
        document.getElementsByClassName("header-top")[0].classList.remove("header-full");
    }
}

// 删除页码
var page_numbers = document.getElementsByClassName("page-number");
for (i = page_numbers.length - 1; i >= 0; i--) {
    page_numbers[i].parentNode.removeChild(page_numbers[i]);
}