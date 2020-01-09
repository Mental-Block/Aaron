const navList = document.querySelector(".nav-list");
const navListLink = document.querySelectorAll(".nav-list-link");

const landing = document.getElementById("landing");
const about = document.getElementById("about");
const featuredProjects = document.getElementById("featured-projects");
const tech = document.getElementById("tech");
const contact = document.getElementById("contact");

const navbarListAppear = () => {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    navList.classList.toggle("nav-list-active");
  });
};

const navbarHeaderColorChange = () => {
  const headerContainer = document.querySelector(".header-container");

  const options = {
    rootMargin: "-100px 0px 0px 0px"
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
  let margin = 99;

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

  window.addEventListener("scroll", () => {
    function InEachSection(section, margin, i) {
      if (
        topOfEachSection(section) > margin ||
        bottomOfEachSection(section) < margin
      ) {
        navListLink[i].classList.remove("active");
      } else {
        navListLink[i].classList.add("active");
      }
    }
    InEachSection(landing, margin, 0);
    InEachSection(about, margin, 1);
    InEachSection(featuredProjects, margin, 2);
    InEachSection(tech, margin, 3);
    InEachSection(contact, margin, 4);
  });
};

navbarListAppear();
navbarHeaderColorChange();
navbarLiColorChangeOnClick();
navbarLiColorChangeOnScroll();
