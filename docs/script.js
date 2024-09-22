let slideIndex = 0;
showSlides();

// 自動スライド表示
function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { 
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // 3秒ごとに次のスライドへ
}

// 次/前のスライドに移動
function plusSlides(n) {
    slideIndex += n; // nだけスライドを進める
    if (slideIndex > document.getElementsByClassName("slides").length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("slides").length;
    }
    showCurrentSlide(slideIndex);
}

// 指定されたスライドを表示
function showCurrentSlide(n) {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n - 1].style.display = "block";
}
