const queryURL = "https://api.giphy.com/v1/gifs/random?api_key=4amnYG6f96XpSKXSn8HI9x0x1HQ8F2iU&tag=burgers";
createImage("image1");
createImage("image2");
createImage("image3");
function createImage(div) {
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then((response) => {
            var imageUrl = response.data.image_original_url;
            $(`.${div}`).attr("src", imageUrl);
        });
};

var slideIndex = 1;
showSlides(slideIndex);

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
    for (var i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}