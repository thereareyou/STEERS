//header sticky start
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 90) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
//header sticky end

//carousel start

const slides = document.querySelectorAll(".carousel__img");
const descriptions = document.querySelectorAll(".carousel__text");
const dots = document.querySelectorAll(".carousel__dot");
const prevBtn = document.querySelector(".carousel__btn-prev");
const nextBtn = document.querySelector(".carousel__btn-next");

let activeSlideIndex = 0;

const getInitSlederValue = () => {
  slides[activeSlideIndex].classList.add("active");
  dots[activeSlideIndex].classList.add("active");
  descriptions[activeSlideIndex].classList.add("active");
};

getInitSlederValue();

const handleChangeActiveSlide = (index) => {
  for (let slide of slides) {
    if (slide.classList.contains("active")) {
      slide.classList.remove("active");
    }
  }
  slides[index].classList.add("active");
};

const handleChangeActiveDescription = (index) => {
  for (let description of descriptions) {
    if (description.classList.contains("active")) {
      description.classList.remove("active");
    }
  }
  descriptions[index].classList.add("active");
};

const handleChangeActiveDot = (index) => {
  for (let dot of dots) {
    if (dot.classList.contains("active")) {
      dot.classList.remove("active");
    }
  }
  dots[index].classList.add("active");
};

const handleNextSlide = () => {
  if (activeSlideIndex === slides.length - 1) {
    activeSlideIndex = 0;
  } else {
    activeSlideIndex++;
  }
  handleChangeActiveSlide(activeSlideIndex);
  handleChangeActiveDescription(activeSlideIndex);
  handleChangeActiveDot(activeSlideIndex);
};

const handlePrevSlide = () => {
  if (activeSlideIndex === 0) {
    activeSlideIndex = slides.length - 1;
  } else {
    activeSlideIndex--;
  }
  handleChangeActiveSlide(activeSlideIndex);
  handleChangeActiveDescription(activeSlideIndex);
  handleChangeActiveDot(activeSlideIndex);
};

nextBtn.addEventListener("click", handleNextSlide);
prevBtn.addEventListener("click", handlePrevSlide);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activeSlideIndex = index;
    handleChangeActiveSlide(activeSlideIndex);
    handleChangeActiveDescription(activeSlideIndex);
    handleChangeActiveDot(activeSlideIndex);
  });
});
//carousel end
