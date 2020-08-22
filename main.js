let ToggleNavStatus = false;

let toggleNav = () => {
  let getSideNav = document.querySelector(".side-nav");
  let getSideNavUl = document.querySelector(".side-nav ul");
  let getSideNavLinks = document.querySelectorAll(".side-nav ul li a");
  let getNavElements = document.querySelector(".nav-elements");
  let getPageMask = document.querySelector(".page-mask");
  let getMenu = document.getElementById("menu");

  if (ToggleNavStatus === false) {
    getNavElements.style.visibility = "visible";
    getNavElements.style.marginLeft = "0";
    getSideNav.style.borderRight = "0";

    //dark page overlay appear
    getPageMask.style.opacity = "1";
    getPageMask.style.visibility = "visible";

    Array.from(getSideNavLinks).map(fade => {
      fade.style.opacity = "1";
    });

    getMenu.classList.remove("burger-btn");
    getMenu.classList.add("close-btn");

    // let menu = document.getElementById("menu");
    // Array.from(menu).map(toggle => {
    //   toggle.classlist.remove("burger-btn");
    //   toggle.classlist.add("close-btn");
    // });

    ToggleNavStatus = true;
  } else if (ToggleNavStatus === true) {
    getNavElements.style.visibility = "hidden";
    getNavElements.style.marginLeft = "-364px";
    getSideNav.style.borderRight = "1px solid #d6d6d6";

    //dark page overlay disappear
    getPageMask.style.opacity = "0";
    getPageMask.style.visibility = "hidden";

    getMenu.classList.remove("close-btn");
    getMenu.classList.add("burger-btn");

    Array.from(getSideNavLinks).map(fade => {
      fade.style.opacity = "0";
    });

    ToggleNavStatus = false;
  }
};

let close = document.getElementsByClassName("close");
Array.from(close).map(toggle => {
  toggle.addEventListener("click", event => {
    toggleNav();
  });
});

let scrollDown = () => {
  let textContainer = document.getElementById("text-container");
  textContainer.scrollIntoView();
};

let scrollButton = document.getElementById("scrollBtn");
scrollButton.addEventListener("click", event => {
  scrollDown();
});

ScrollReveal().reveal(".text-block");

// apply function to all contents of an array
var arr = [1, 4, 9, 16];

const resultat = arr.map(i => {
  return i * 2;
});
abc = ["a", "b", "c"];

def = ["d", "e", "f"];

abcdef = abc.concat(def);

console.log(abcdef);

console.log(resultat);

// for and for/in will only give you the index and not the actual contents of an array

// forEach and for/of will return the value of the array

const array = ["a", "b", "c"];

array.forEach(v => console.log(v));
