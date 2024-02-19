const sliders = [...document.querySelectorAll(".slider__container")];
const sliderControlPrev = [...document.querySelectorAll(".slider__control.prev")];
const sliderControlNext = [...document.querySelectorAll(".slider__control.next")];
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
var isSecondImage = false;

sliders.forEach((slider, i) => {
  let isDragStart = false,
    isDragging = false,
    isSlide = false,
    prevPageX,
    prevScrollLeft,
    positionDiff;

  const sliderItem = slider.querySelector(".slider__item");
  var isMultislide = (slider.dataset.multislide === 'true');

  sliderControlPrev[i].addEventListener('click', () => {
    if (isSlide) return;
    isSlide = true;
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
    slider.scrollLeft += -slideWidth;
    setTimeout(function () { isSlide = false; }, 700);
  });

  sliderControlNext[i].addEventListener('click', () => {
    if (isSlide) return;
    isSlide = true;
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
    slider.scrollLeft += slideWidth;
    setTimeout(function () { isSlide = false; }, 700);
  });

  function autoSlide() {
    if (slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 || slider.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff);
    let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
    let valDifference = slideWidth - positionDiff;
    if (slider.scrollLeft > prevScrollLeft) {
      return slider.scrollLeft += positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
    }
    slider.scrollLeft -= positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
  }

  function dragStart(e) {
    if (isSlide) return;
    isSlide = true;
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slider.scrollLeft;
    setTimeout(function () { isSlide = false; }, 700);
  }

  function dragging(e) {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slider.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
  }

  function dragStop() {
    isDragStart = false;
    slider.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
    autoSlide();
  }

  addEventListener("resize", autoSlide);
  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("touchstart", dragStart);
  slider.addEventListener("mousemove", dragging);
  slider.addEventListener("touchmove", dragging);
  slider.addEventListener("mouseup", dragStop);
  slider.addEventListener("touchend", dragStop);
  slider.addEventListener("mouseleave", dragStop);
});
let i = 0;
var quadimages = document.querySelectorAll("#quad figure");
for (i = 0; i < quadimages.length; i++) {
  quadimages[i].addEventListener('click', function () { this.classList.toggle("expanded"); quad.classList.toggle("full") });
}

img1.onclick = function () {
  img1.style.opacity = '5%';
  setTimeout(function () {
    if (isSecondImage) {
      img1.src = 'Yeşil İllüstrasyon Romantik Sevimli Düğün Davetiyesi.png';
    }
    else {
      img1.src = 'f.png';
    }
    isSecondImage = !isSecondImage;
    img1.style.opacity = 1;
  }, 800);
}

img2.onclick = function () {
  img2.style.opacity = '5%';
  setTimeout(function () {
    if (isSecondImage) {
      img2.src = 'dd.png';
    }
    else {
      img2.src = 'f.png';
    }
    isSecondImage = !isSecondImage;
    img2.style.opacity = 1;
  }, 800);
}

img3.onclick = function () {
  img3.style.opacity = '5%';
  setTimeout(function () {
    if (isSecondImage) {
      img3.src = 'Pink and Brown Illustrative Happy Birthday A4 Document.png';
    }
    else {
      img3.src = 'f.png';
    }
    isSecondImage = !isSecondImage;
    img3.style.opacity = 1;
  }, 800);

}

img4.onclick = function () {
  img4.style.opacity = '5%';
  setTimeout(function () {
    if (isSecondImage) {
      img4.src = 'f.png';
    }
    else {
      img4.src = 'dd.png';
    }
    isSecondImage = !isSecondImage;
    img4.style.opacity = 1;
  }, 800);
  
}