// for whole page settings and blurring
let whole = document.querySelector(".whole");

// image-landscapes
let btn1 = document.querySelector(".drop-btn-1");
let parent1 = document.querySelector(".drop-parent-1");
let X1 = document.querySelector(".X-1");

btn1.addEventListener("click", () => {
    parent1.style.display = "block";
    whole.style.opacity = "0.9";
    whole.style.filter = "blur(10px)";
});

X1.addEventListener("click", () => {
    parent1.style.display = "none";
    whole.style.opacity = "1";
    whole.style.filter = "blur(0px)";
});

// image-beach
let btn2 = document.querySelector(".drop-btn-2");
let parent2 = document.querySelector(".drop-parent-2");
let X2 = document.querySelector(".X-2");

btn2.addEventListener("click", () => {
    parent2.style.display = "block";
    whole.style.opacity = "0.9";
    whole.style.filter = "blur(10px)";
});

X2.addEventListener("click", () => {
    parent2.style.display = "none";
    whole.style.filter = "blur(0px)";
        whole.style.opacity = "1";

});

// image-historic places
let btn3 = document.querySelector(".drop-btn-3");
let parent3 = document.querySelector(".drop-parent-3");
let X3 = document.querySelector(".X-3");

btn3.addEventListener("click", () => {
    parent3.style.display = "block";
    whole.style.filter = "blur(10px)";
    whole.style.opacity = "0.9";

});

X3.addEventListener("click", () => {
    parent3.style.display = "none";
    whole.style.filter = "blur(0px)";
        whole.style.opacity = "1";

});

// image-mountains
let btn4 = document.querySelector(".drop-btn-4");
let parent4 = document.querySelector(".drop-parent-4");
let X4 = document.querySelector(".X-4");

btn4.addEventListener("click", () => {
    parent4.style.display = "block";
    whole.style.filter = "blur(10px)";
    whole.style.opacity = "0.9";

});

X4.addEventListener("click", () => {
    parent4.style.display = "none";
    whole.style.filter = "blur(0px)";
        whole.style.opacity = "1";

});

// image-compter
let btn5 = document.querySelector(".drop-btn-5");
let parent5 = document.querySelector(".drop-parent-5");
let X5 = document.querySelector(".X-5");

btn5.addEventListener("click", () => {
    parent5.style.display = "block";
    whole.style.filter = "blur(10px)";
    whole.style.opacity = "0.9";

});

X5.addEventListener("click", () => {
    parent5.style.display = "none";
    whole.style.filter = "blur(0px)";
        whole.style.opacity = "1";

});

//image-space
let btn6 = document.querySelector(".drop-btn-6");
let parent6 = document.querySelector(".drop-parent-6");
let X6 = document.querySelector(".X-6");

btn6.addEventListener("click", () => {
    parent6.style.display = "block";
    whole.style.filter = "blur(10px)";
    whole.style.opacity = "0.9";

});

X6.addEventListener("click", () => {
    parent6.style.display = "none";
    whole.style.filter = "blur(0px)";
        whole.style.opacity = "1";

});

//image-stars in jar
let btn7 = document.querySelector(".drop-btn-7");
let parent7 = document.querySelector(".drop-parent-7");
let X7 = document.querySelector(".X-7");

btn7.addEventListener("click", () => {
    parent7.style.display = "block";
    whole.style.filter = "blur(10px)";
    whole.style.opacity = "0.9";

});

X7.addEventListener("click", () => {
    parent7.style.display = "none";
    whole.style.filter = "blur(0px)";
        whole.style.opacity = "1";

});

//image-city in daylight
let btn8 = document.querySelector(".drop-btn-8");
let parent8 = document.querySelector(".drop-parent-8");
let X8 = document.querySelector(".X-8");

btn8.addEventListener("click", () => {
    parent8.style.display = "block";
    whole.style.filter = "blur(10px)";
    whole.style.opacity = "0.9";

});

X8.addEventListener("click", () => {
    parent8.style.display = "none";
    whole.style.filter = "blur(0px)";
        whole.style.opacity = "1";

});

//image-city in night
let btn9 = document.querySelector(".drop-btn-9");
let parent9 = document.querySelector(".drop-parent-9");
let X9 = document.querySelector(".X-9");

btn9.addEventListener("click", () => {
    parent9.style.display = "block";
    whole.style.filter = "blur(10px)";
    whole.style.opacity = "0.9";

});

X9.addEventListener("click", () => {
    parent9.style.display = "none";
    whole.style.filter = "blur(0px)";
        whole.style.opacity = "1";

});



// form validation section
function validateForm(){
    let name = document.forms['contactForm']['Name'].value
    let email = document.forms['contactForm']['Email'].value
    let review = document.forms['contactForm']['Review'].value
    if (name == ''){
        alert('The Name field is empty, please fill it')
        return false
    }
    else if (email == ''){
        alert('The Email field is empty, please fill it')
        return false
    }
    else if (review == ''){
        alert('The Review field is empty, please fill it.')
        return false
    }

    else{
        return true
    }


}



