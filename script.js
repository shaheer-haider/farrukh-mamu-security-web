//  ye usi tarah chal raha hai jaise saylani wale assingment me tha bsss property change nh kar raha class change kr raha hu
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("the-navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("hide")
        navbar.classList.remove("show")
    } else {
        navbar.classList.remove("hide")
        navbar.classList.add("show")
    }

    if (window.pageYOffset > sticky + 1000) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

}

