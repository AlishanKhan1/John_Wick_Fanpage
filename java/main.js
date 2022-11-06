// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var nav = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = nav.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     nav.classList.add("sticky")
//   } else {
//     nav.classList.remove("sticky");
//   }
// }

const sectionheroEL = document.querySelector(".hero-img");
const obs = new IntersectionObserver(
    function(entries){
        const ent= entries[0];
        console.log(ent);

        if(ent.isIntersecting === false){
            document.body.classList.add("sticky");
        }

        if(ent.isIntersecting === true){
            document.body.classList.remove("sticky");
        }
    },
    {
        root: null,
        threshold :0, 
        rootMargin :"-80px",
    }    
);
obs.observe(sectionheroEL);