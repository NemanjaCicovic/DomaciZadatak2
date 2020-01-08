$(document).ready(function () {
    var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

    var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    var x = document.getElementById("sirina");
    x.innerHTML = "Sirina prozora je: " + w + "px" + ", a Visina: " + h + "px" +".";

    var broj = document.getElementById("srecni-broj");
    broj.innerHTML = 'Tvoj srecni broj je ' + Math.floor(Math.random()*100 + 1);
});

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        directionNav: false
    });
});
