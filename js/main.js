//header sticky start
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 90 && !mobileMenu.classList.contains("active")) {
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
const menuContactBtn = document.querySelector(".menu-contact-btn");
const popUpWindow = document.querySelector(".modal");
const popUpWindowContent = document.querySelector(".modal__content");
const popUpClosebtn = document.querySelector(".modal__close-btn");

contactBtn.addEventListener("click", () => {
  popUpWindow.classList.add("active");
  document.body.classList.add("no-scroll");
});

contactBtnMobile.addEventListener("click", () => {
  popUpWindow.classList.add("active");
  document.body.classList.add("no-scroll");
});

menuContactBtn.addEventListener("click", () => {
  popUpWindow.classList.add("active");
  document.body.classList.add("no-scroll");
});

popUpClosebtn.addEventListener("click", () => {
  popUpWindow.classList.remove("active");
  if (!mobileMenu.classList.contains("active")) {
    document.body.classList.remove("no-scroll");
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popUpWindow.classList.remove("active");
    if (!mobileMenu.classList.contains("active")) {
      document.body.classList.remove("no-scroll");
    }
  }
});

popUpWindowContent.addEventListener("click", (event) => {
  event._isClickWithInWindow = true;
});

popUpWindow.addEventListener("click", (event) => {
  if (event._isClickWithInWindow) return;
  event.currentTarget.classList.remove("active");
  if (!mobileMenu.classList.contains("active")) {
    document.body.classList.remove("no-scroll");
  }
});

// popup end

// menu nav start

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCancelBtn = document.querySelector(".menu-cancel-btn");
const menuNav = document.querySelectorAll(".mobile-menu__list");
const headerPlaceholder = document.querySelector(".header-placeholder");

console.log(menuNav);

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  header.classList.remove("sticky");
  header.classList.add("header-menu-fixed");
  menuBtn.classList.add("disabled");
  menuCancelBtn.classList.add("active");
  document.body.classList.add("no-scroll");
  headerPlaceholder.classList.add("active");
});

menuCancelBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  header.classList.remove("header-menu-fixed");
  menuBtn.classList.remove("disabled");
  menuCancelBtn.classList.remove("active");
  headerPlaceholder.classList.remove("active");
  if (window.scrollY > 90) {
    header.classList.add("sticky");
  }
  document.body.classList.remove("no-scroll");
});

menuNav.forEach((item, index) => {
  if (!item.querySelector(".menu-contact-btn")) {
    item.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
      header.classList.remove("header-menu-fixed");
      menuCancelBtn.classList.remove("active");
      menuBtn.classList.remove("disabled");
      headerPlaceholder.classList.remove("active");
    });
  }
});

// menu nav end

// section info slides start

if (window.innerWidth <= 1024) {
  var swiper = new Swiper(".about-swiper", {
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
}
// section info slides start

// portfolio slides start

var swiper = new Swiper(".portfolio-swiper", {
  loop: true,
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  on: {
    init: function () {
      const el = document.querySelector(".slide-number");
      const number = this.realIndex + 1;
      el.textContent = number.toString().padStart(2, "0");
      el.classList.add("show");
    },
    realIndexChange: function () {
      updateSlideNumber(this);
    },
    slideChangeTransitionStart: function () {
      updateSlideNumber(this);
    },
  },
});

function updateSlideNumber(swiper) {
  const el = document.querySelector(".slide-number");
  el.classList.remove("show");
  setTimeout(() => {
    const number = swiper.realIndex + 1;
    el.textContent = number.toString().padStart(2, "0");
    el.classList.add("show");
  }, 100);
}

// portfolio slides start

// products slider start
if (window.innerWidth <= 1024) {
  var swiper = new Swiper(".products-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });
}
// products slider end
