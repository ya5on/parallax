var space = document.getElementById("space");
var layout1 = document.getElementById("layout1");
var layout2 = document.getElementById("layout2");
var layout3 = document.getElementById("layout3");

var settings = {
    count: 1000,
    maxSize: 10
};

var starsArray = [];

function random(max) {
    return Math.floor(Math.random() * max);
}


function init() {
    for (var i = 0; i < settings.count; i++) {
        var star = {
            size: random(settings.maxSize),
            left: random(window.innerWidth + 150) - 75,
            top: random(window.innerHeight + 150) - 75
        };

        // Add star to array
        starsArray.push(star);
    }
}


function renderStars() {
    for (var i in starsArray) {
        // Get star object
        var star = starsArray[i];

        // Make star DOM element
        var domStar = document.createElement("div");
        domStar.setAttribute("class", "star");
        domStar.style.width = star.size + "px";
        domStar.style.height = star.size + "px";
        domStar.style.left = star.left + "px";
        domStar.style.top = star.top + "px";

        if (star.size < 4) {
            layout1.appendChild(domStar);
        } else if (star.size < 7) {
            layout2.appendChild(domStar);
        } else {
            layout3.appendChild(domStar);
        }

        // Add star to DOM
        //space.appendChild(domStar);
    }
}

// Initialize
init();

renderStars();

document.onmousemove = function (e) {
    //e.clientX;
    //e.clientY

    var w = (window.innerWidth / 2 - e.clientX) / 20;
    var h = (window.innerHeight / 2 - e.clientY) / 20;

    console.log(w, window.innerWidth, e.clientX);

    layout1.style.left = w + "px";
    layout1.style.top = h + "px";
    layout2.style.left = w / 0.5 + "px";
    layout2.style.top = h / 0.5 + "px";
    layout3.style.left = w / 0.25 + "px";
    layout3.style.top = h / 0.25 + "px";


};















