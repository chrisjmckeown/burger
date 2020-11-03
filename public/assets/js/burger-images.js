const queryURL = "https://api.giphy.com/v1/gifs/random?api_key=4amnYG6f96XpSKXSn8HI9x0x1HQ8F2iU&tag=burgers";
const dotContainer = $(".dot-container");
const slideshowContainer = $(".slideshow-container");
let slideIndex = 1;

for (var i = 1; i < 5 + 1; i++) {
    createImage(i);
}

function createImage(count) {
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then((response) => {
            var imageUrl = response.data.image_original_url;
            $(`.image${count}`).attr("src", imageUrl);

            slideshowContainer.append(`<div class="mySlides fade"><img class="image${count}" src=${imageUrl} style="width:100%"></div>`);
            dotContainer.append(`<span class="dot" onclick="currentSlide(${count})"></span>`);
            showSlides(1);
        });
};


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = $(".mySlides");
    const dots = $(".dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    Array.prototype.forEach.call(slides, element => {
        element.style.display = "none";
    });
    Array.prototype.forEach.call(slides, element => {
        element.className = element.className.replace(" active", "");
    });
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}