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

// slider start
const letterSlider = document.querySelector(".slider");

letterSlider.addEventListener(
  "wheel",
  (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      letterSlider.scrollBy({
        left: e.deltaY < 0 ? -100 : 100,
        behavior: "smooth",
      });
    }
  },
  { passive: false }
);

//slider end

// popup start

const contactBtn = document.querySelector(".header__btn");
const contactBtnMobile = document.querySelector(".contact-btn");
const popUpWindow = document.querySelector(".modal");
const popUpWindowContent = document.querySelector(".modal__content");
const popUpClosebtn = document.querySelector(".modal__close-btn");

contactBtn.addEventListener("click", () => {
  popUpWindow.classList.toggle("active");
});

contactBtnMobile.addEventListener("click", () => {
  popUpWindow.classList.toggle("active");
});

popUpClosebtn.addEventListener("click", () => {
  popUpWindow.classList.remove("active");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popUpWindow.classList.remove("active");
  }
});

popUpWindowContent.addEventListener("click", (event) => {
  event._isClickWithInWindow = true;
});

popUpWindow.addEventListener("click", (event) => {
  if (event._isClickWithInWindow) return;
  event.currentTarget.classList.remove("active");
});

// popup end
