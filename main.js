 // Mobile menu
 const navMenu = document.getElementById("nav-menu");
 const navLink = document.querySelectorAll(".nav-link");
 const hamburger = document.getElementById("hamburger");

 hamburger.addEventListener("click", () => {
   navMenu.classList.toggle("left-[0]");
   hamburger.classList.toggle("ri-close-large-line");
 });

 navLink.forEach((link) => {
   link.addEventListener("click", () => {
     navMenu.classList.toggle("left-[0]");
     hamburger.classList.toggle("ri-close-large-line");
   });
 });

 // testimonial

 function showReview() {
   const userTexts = document.querySelectorAll(".user-text");
   const userPics = document.querySelectorAll(".user-pic");

   for (userPic of userPics) {
     userPic.classList.remove("active-pic");
   }
   for (userText of userTexts) {
     userText.classList.remove("active-text");
   }

   let i = Array.from(userPics).indexOf(event.target);
   userPics[i].classList.add("active-pic");
   userTexts[i].classList.add("active-text");
 }

 const toggleBtn = document.getElementById("toggleBtn");
 const card_front_1 = document.querySelector("#card_front_1");
 const card_back_1 = document.querySelector("#card_back_1");

 const card_front_2 = document.querySelector("#card_front_2");
 const card_back_2 = document.querySelector("#card_back_2");

 const card_front_3 = document.querySelector("#card_front_3");
 const card_back_3 = document.querySelector("#card_back_3");

 toggleBtn.addEventListener("change", () => {
   card_front_1.classList.toggle("-rotate-y-180");
   card_back_1.classList.toggle("rotate-y-180");

   card_front_2.classList.toggle("-rotate-y-180");
   card_back_2.classList.toggle("rotate-y-180");

   card_front_3.classList.toggle("-rotate-y-180");
   card_back_3.classList.toggle("rotate-y-180");
 });

 /*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
 const activeLink = () => {
   const sections = document.querySelectorAll("section");
   const navLinks = document.querySelectorAll(".nav-link");
   let current = "home";
   sections.forEach((section) => {
     const sectionTop = section.offsetTop;
     if (this.scrollY >= sectionTop - 60) {
       current = section.getAttribute("id");
     }
   });
   navLinks.forEach((item) => {
     item.classList.remove("text-color-secondary");
     if (item.href.includes(current)) {
       item.classList.add("text-color-secondary");
     }
   });
 };

 window.addEventListener("scroll", activeLink);

 /*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
 const scrollHeader = () => {
   const header = document.getElementById("header");
   if (this.scrollY >= 50) {
     header.classList.add("border-b", "border-color-secondary");
   } else {
     header.classList.remove("border-b", "border-color-secondary");
   }
 };
 window.addEventListener("scroll", scrollHeader);

 /*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
 const scrollUp = () => {
   const scrollUpBtn = document.getElementById("scroll-up");
   if (this.scrollY >= 250) {
     scrollUpBtn.classList.remove("-bottom-1/2");
     scrollUpBtn.classList.add("bottom-4");
   } else {
     scrollUpBtn.classList.add("-bottom-1/2");
     scrollUpBtn.classList.remove("bottom-4");
   }
 };
 window.addEventListener("scroll", scrollUp);