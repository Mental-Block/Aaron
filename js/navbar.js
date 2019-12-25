const navList = document.querySelector(".nav-list");
const navListLink = document.querySelectorAll(".nav-list-link");
const about = document.getElementById("about");
const featuredProjects = document.getElementById("featured-projects");
const tech = document.getElementById("tech");
const contact = document.getElementById("contact");
const burger = document.querySelector(".burger");
const headerContainer = document.querySelector(".header-container");
const landing = document.getElementById("landing");

function topOfEachSection(topOfSection) {
  let a = topOfSection.getBoundingClientRect();
  topOfSection = a.top;
  return topOfSection;
}

function bottomOfEachSection(bottomOfSection) {
  let b = bottomOfSection.getBoundingClientRect();
  bottomOfSection = b.bottom;
  return bottomOfSection;
}

const navbarListAppear = () => {
  burger.addEventListener("click", () => {
    navList.classList.toggle("nav-list-active");
  });
};

const navbarBgColorChange = () => {
  /* Couldn't use this for all navigation links color change on scrolling as it is 
relative to the users viewport and not per section of the document, also better for 
navbar toggles of the class */
  //Home navigation is done here

  const options = {
    rootMargin: "-101px 0px 0px 0px"
  };

  const landingSection = new IntersectionObserver(function(
    entries,
    landingSection
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        headerContainer.classList.add("header-container-active");
        navList.classList.add("nav-list-active-add");
      } else {
        headerContainer.classList.remove("header-container-active");
        navList.classList.remove("nav-list-active-add");
      }

      if (entry.isIntersecting) {
        navListLink[0].classList.add("active");
      } else {
        navListLink[0].classList.remove("active");
      }
    });
  },
  options);

  landingSection.observe(landing);
};

const navbarLiColorChangeOnClick = () => {
  const item = document.getElementsByClassName("nav-list-link");

  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", function() {
      let itemZero = item[0];

      while (itemZero) {
        if (itemZero.tagName == "A") {
          itemZero.classList.remove("active");
        }
        itemZero = itemZero.nextSibling;
      }

      this.classList.add("active");
    });
  }
};

const navbarLiColorChangeOnScroll = () => {
  let navbarMargin = 100;

  window.addEventListener("scroll", () => {
    if (
      topOfEachSection(about) > navbarMargin ||
      bottomOfEachSection(about) < navbarMargin
    ) {
      navListLink[1].classList.remove("active");
    } else {
      navListLink[1].classList.add("active");
    }

    if (
      topOfEachSection(featuredProjects) > navbarMargin ||
      bottomOfEachSection(featuredProjects) < navbarMargin
    ) {
      navListLink[2].classList.remove("active");
    } else {
      navListLink[2].classList.add("active");
    }

    if (
      topOfEachSection(tech) > navbarMargin ||
      bottomOfEachSection(tech) < navbarMargin
    ) {
      navListLink[3].classList.remove("active");
    } else {
      navListLink[3].classList.add("active");
    }

    if (topOfEachSection(contact) > navbarMargin) {
      navListLink[4].classList.remove("active");
    } else {
      navListLink[4].classList.add("active");
    }
  });
};

navbarListAppear();
navbarBgColorChange();
navbarLiColorChangeOnClick();
navbarLiColorChangeOnScroll();
