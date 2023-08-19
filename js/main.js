let menu = document.querySelector(".menu1");
let toggle = document.querySelector(".toggle-menu");
let menuLis = document.querySelectorAll(".menu1 li a");
// toggle menu
toggle.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  document.addEventListener("click", (e) => {
    if (e.target !== toggle) {
      menu.classList.remove("show-menu");
    }
  });
  menuLis.forEach((li) => {
    li.addEventListener("click", () => {
      menu.classList.remove("show-menu");
    });
  });
});
// active header
menuLis.forEach((li) => {
  li.addEventListener("click", () => {
    menuLis.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
  });
});
// active search
let searchBtn = document.querySelector(".fa-search");
let overlay = document.querySelector(".overlay");
let popup = document.querySelector(".pop-content");
searchBtn.addEventListener("click", () => {
  overlay.classList.add("active");
  popup.classList.add("active");
});
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.classList.remove("active");
    popup.classList.remove("active");
  }
});
// start slider
// all access for slider
let slider = document.querySelector(".landing");
let arrRight = document.querySelector(".fa-angle-right");
let arrLeft = document.querySelector(".fa-angle-left");
let bullets = document.querySelectorAll(".bullets li");
const images = ["landing.jpg", "landing2.jpg", "landing3.jpg"];
let id = 0;
// function to make background dinamic
function slide(id) {
  slider.style.backgroundImage = `url(img/${images[id]})`;
  slider.classList.add("image-fade");
  setTimeout(() => {
    slider.classList.remove("image-fade");
  }, 550);
}
// arrow left change img
arrLeft.addEventListener("click", toPrev);
function toPrev() {
  id--;
  if (id < 0) {
    id = images.length - 1;
  }
  slide(id);
  bulletsShow();
}
// arrow right change img
arrRight.addEventListener("click", toNext);
function toNext() {
  id++;
  if (id > images.length - 1) {
    id = 0;
  }
  slide(id);
  bulletsShow();
}
// auto slide
// stop auto slide and resume when open search
// when open search autoSlide will stop untill you finsh searching
function autoSlide() {
  auto = setInterval(() => {
    if (overlay.classList.contains("active")) {
      clearInterval();
    }
    if (!overlay.classList.contains("active")) {
      toNext();
    }
  }, 10000);
}
autoSlide();
// clear auto slide
arrRight.addEventListener("mouseover", () => {
  clearInterval(auto);
});
arrLeft.addEventListener("mouseover", () => {
  clearInterval(auto);
});
bullets.forEach((li) => {
  li.addEventListener("mouseover", () => {
    clearInterval(auto);
  });
});
// resume auto slide
arrRight.addEventListener("mouseout", () => {
  autoSlide();
});
arrLeft.addEventListener("mouseout", () => {
  autoSlide();
});
bullets.forEach((li) => {
  li.addEventListener("mouseout", () => {
    autoSlide();
  });
});
// when you change img from arrow the background of bullets will change
function bulletsShow() {
  for (i = 0; i < bullets.length; i++) {
    bullets[i].className = bullets[i].className.replace("active", "");
  }
  bullets[id].className += "active";
}
// change img from bullets
bullets.forEach((li) => {
  li.addEventListener("click", () => {
    bullets.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    if (bullets[0].classList.contains("active")) {
      slider.style.backgroundImage = `url(img/landing.jpg)`;
      id = 0;
    } else if (bullets[1].classList.contains("active")) {
      slider.style.backgroundImage = `url(img/landing2.jpg)`;
      id = 1;
    } else if (bullets[2].classList.contains("active")) {
      slider.style.backgroundImage = `url(img/landing3.jpg)`;
      id = 2;
    }
    slide(id);
  });
});
// end slider
// start PORTFOLIO
// remove and put active class
// filter imgs
let protfolioLi = document.querySelectorAll(".shuffle li");
let protoFig = document.querySelectorAll(".box");

protfolioLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    protfolioLi.forEach((li) => {
      li.classList.remove("active");
    });
    li.classList.add("active");
    protoFig.forEach((f) => {
      f.dataset.filter === e.target.textContent
        ? (f.style.display = "block")
        : e.target.textContent === "All"
        ? (f.style.display = "block")
        : (f.style.display = "none");
    });
  });
});

//end PORTFOLIO
// Start Stats
let countNum = document.querySelectorAll(".number");
let stats = document.querySelector(".stats");
let started = false;
window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    stats.offsetTop + stats.offsetHeight - window.innerHeight
  ) {
    if (!started) {
      countNum.forEach((num) => startCount(num));
    }
    started = true;
  }
});
function startCount(e) {
  let goal = e.dataset.goal;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
// End Stats
// skills
let prog = document.querySelectorAll(".prog span");
let ourSkills = document.querySelector(".our-skills");
let start = false;
window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    ourSkills.offsetTop + ourSkills.offsetHeight - window.innerHeight
  ) {
    if (!start) {
      prog[0].style.animation = "prog1 1.5s  ease-in-out  both ";
      prog[1].style.animation = "prog2 1.5s  ease-in-out  both ";
      prog[2].style.animation = "prog3 1.5s  ease-in-out  both ";
      prog[3].style.animation = "prog4 1.5s  ease-in-out  both ";
    }
    start = true;
  }
});
