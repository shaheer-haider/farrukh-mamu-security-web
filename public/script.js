//  ye usi tarah chal raha hai jaise saylani wale assingment me tha bsss property change nh kar raha class change kr raha hu
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("the-navbar");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky + 800) {
        navbar.classList.add("sticky");
        navbar.classList.remove("hide");
        navbar.classList.remove("bg-dark");
    } else if (window.pageYOffset > sticky + 100 && window.pageYOffset < sticky + 800) {
        navbar.classList.add("hide");
        navbar.classList.remove("sticky");
        navbar.classList.remove("bg-dark");
    }
    else {
        navbar.classList.remove("hide");
        navbar.classList.remove("sticky");
        navbar.classList.remove("bg-dark");
    }
}


function changeNavColor(){
    if(window.pageYOffset == sticky){
        if(navbar.classList.contains("bg-dark")){
            navbar.classList.remove("bg-dark");
        }
        else{
            navbar.classList.add("bg-dark");
        }

    }
}


