function createSlider() {
    var swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: checkMobile(),
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

createSlider();

function checkMobile(){
    return document.firstElementChild.clientWidth < 758
}

console.log(document.firstElementChild.clientWidth < 758);

