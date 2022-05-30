const toggleButton = document.getElementById("toggle");
//console.log(toggleButton);
const navMenu = document.getElementById("navMenu");
const links =document.getElementById("links")

toggleButton.addEventListener("click", () => {
    
    navMenu.classList.toggle('active')

    links.classList.toggle('active')

    links.style.transition=("all 2s")
});

if(navigator.serviceWorker){
    navigator.serviceWorker.register("../sw.js")
    .then((reg)=>{

        //console.log("this file is already registered ", reg);
    })
    .catch((err)=>{
        console.log(err);
    })
}
var navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});
