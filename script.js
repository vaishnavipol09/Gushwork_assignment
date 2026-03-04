let images = [
"./images/1.jpg",
"./images/2.jpg",
"./images/3.jpg",
"./images/4.jpg",
"./images/5.jpg"
];

let current = 0;

function showImage(){
document.getElementById("mainImg").src = images[current];
}

function nextImage(){
current++;
if(current >= images.length){
current = 0;
}
showImage();
}

function prevImage(){
current--;
if(current < 0){
current = images.length - 1;
}
showImage();
}


// Frequently Asked Questions
function changeImage(element){
document.getElementById("mainImg").src = element.src;
}

const faqItems = document.querySelectorAll(".faq-question");

faqItems.forEach(button => {

button.addEventListener("click", () => {

const item = button.parentElement;

item.classList.toggle("active");

});

});



// Versatile Applications Across Industries
const slider = document.getElementById("industrySlider");

document.getElementById("next").onclick = () => {

slider.scrollLeft += 300;

};

document.getElementById("prev").onclick = () => {

slider.scrollLeft -= 300;

};




// Advanced HDPE Pipe Manufacturing Process section
const tabs = document.querySelectorAll(".process-tabs button");

tabs.forEach(tab => {

tab.addEventListener("click", () => {

tabs.forEach(btn => btn.classList.remove("active"));
tab.classList.add("active");

});

});



// Trusted Performance. Proven Results
const sliders = document.getElementById("testimonialSlider");

setInterval(()=>{

sliders.scrollLeft += 340;

},3000);




// Complete Piping Solutions Portfolio