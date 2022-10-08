const welcome = document.querySelector(".welcome");
const btnLinks = document.querySelector(".other-links");
const links = document.querySelector(".links");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const secondes = document.querySelector(".secondes");
const video = document.querySelector(".video-img");
const videoName = document.querySelectorAll(".video-name");
const counters = document.querySelectorAll("[data-count]");
const header = document.querySelector(".header");

btnLinks.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  links.classList.toggle("opacity");
});

// smooth scroll
header.addEventListener("click", function (e) {
  if (e.target.classList.contains("other-link")) {
    e.preventDefault();
    console.log("other");
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

let time = 200;
const str = "Welcome,To Mohamed World".split("");
const type = () => {
  for (let i = 0; i < str.length; i++) {
    time += 100;
    setTimeout(() => {
      welcome.textContent += str[i];
    }, time);
  }
};
type();

//  add time down in last Events section

minute.textContent = 1;
hour.textContent = 1;
setInterval(() => {
  if (+secondes.textContent > 0) {
    secondes.textContent = +secondes.textContent - 1;
  } else if (+secondes.textContent === 0) {
    secondes.textContent = 60;
    if (+minute.textContent > 0) {
      minute.textContent = +minute.textContent - 1;
    } else if (+minute.textContent === 0) {
      minute.textContent = 60;
      hour.textContent = +hour.textContent - 1;

      if (+hour.textContent === 0) {
        hour.textContent = 24;
        day.textContent = +day.textContent - 1;
      }
    }
  }
}, 1000);

// set videos pic
for (let i = 0; i < videoName.length; i++) {
  videoName[i].addEventListener("click", () => {
    video.src = `./imgs/videos-${i + 1}.jpg`;
  });
}

// set width of skills
const skillsSection = document.querySelector(".skills-section ");
const width = document.querySelectorAll(".width");
const fullWidth = function (entires, observer) {
  const [entiry] = entires;
  if (!entiry.isIntersecting) return;
  width.forEach((ele) => {
    console.log(ele);
    ele.classList.add("outer__width");
  });
  observer.unobserve(skillsSection);
};

const setWidth = new IntersectionObserver(fullWidth, {
  root: null,
  threshold: 1,
});
setWidth.observe(skillsSection);

//set counter

const sectionAwesome = document.querySelector(".section-awesome");

function count(name, num) {
  const startCount = setInterval(() => {
    name.textContent = +name.textContent + 1;
    if (+name.textContent === num) clearInterval(startCount);
  }, 20);
}

// counters.forEach((counter) => {
//   const countNum = counter.getAttribute("data-count");
//   count(counter, +countNum);
// });

const counting = function (entires, observe) {
  const [entiry] = entires;
  console.log(entiry);
  if (!entiry.isIntersecting) return;
  counters.forEach((counter) => {
    const countNum = counter.getAttribute("data-count");
    count(counter, +countNum);
  });
  observe.unobserve(sectionAwesome);
};

const startCount = new IntersectionObserver(counting, {
  root: null,
  threshold: 0.7,
});
startCount.observe(sectionAwesome);
