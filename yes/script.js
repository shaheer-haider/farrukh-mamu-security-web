function byID(id) {
    return document.getElementById(id);
}


//  ye usi tarah chal raha hai jaise saylani wale assingment me tha bsss property change nh kar raha class change kr raha hu
window.onscroll = function () { myFunction() };

var navbar = byID("the-navbar");
var sticky = navbar.offsetTop;


var subButton = byID("sub-btn");
var subSticky = subButton.offsetTop;


function myFunction() {
    if (window.pageYOffset > sticky + 800) {
        navbar.classList.add("sticky");
        navbar.classList.remove("hide");
        navbar.classList.remove("bg-dark");
    } else if (window.pageYOffset > sticky + 200 && window.pageYOffset < sticky + 800) {
        navbar.classList.add("hide");
        navbar.classList.remove("sticky");
        navbar.classList.remove("bg-dark");
    }
    else {
        navbar.classList.remove("hide");
        navbar.classList.remove("sticky");
        navbar.classList.remove("bg-dark");
    }

    if (window.pageYOffset > subSticky + 150) {
        navbar.classList.add("bg-dark");
    } else {
        navbar.classList.remove("bg-dark");
    }

}


function changeNavColor() {
    if (window.pageYOffset == sticky) {
        if (navbar.classList.contains("bg-dark")) {
            navbar.classList.remove("bg-dark");
        }
        else {
            navbar.classList.add("bg-dark");
        }

    }
}


var validated;

function validatebyID(id, errorID) {
    if (!byID(id).checkValidity()) {
        $('#'+errorID).fadeIn('fast');
        byID(errorID).innerHTML = byID(id).validationMessage;
        setTimeout(function () {
            $('#'+errorID).fadeOut('fast');
        }, 3000);
        validated = false;
    } else {
        validated = true;
    }
}

emailjs.init("user_97egupFsdSN70289iTRl9");
function sendEmail() {
    validatebyID("name", "nameError");
    validatebyID("phone", "phoneError");
    validatebyID("city", "cityError");
    validatebyID("address", "addressError");
    validatebyID("message", "msgError");
    if (validated) {
        alert("Email send succesfully");
        var templateParams = {
            name: "Shaheer",
            phone: "haider",
            city: "karachi",
            address: "address",
            message: "message"
        }
        emailjs.send("gmail", "template_zs9dTLdC", templateParams);
    }
}


