// ---------------- IMAGE SLIDER ----------------

let images = [
"./images/1.jpg",
"./images/2.jpg",
"./images/3.jpg",
"./images/4.jpg",
"./images/5.jpg"
];

let current = 0;

function showImage(){
const img = document.getElementById("mainImg");
if(img){
img.src = images[current];
}
}

function nextImage(){

current = (current + 1) % images.length;

showImage();

}

function prevImage(){

current = (current - 1 + images.length) % images.length;

showImage();

}

// Thumbnail change

function changeImage(element){

const img = document.getElementById("mainImg");

if(img){
img.src = element.src;
}

}



// ---------------- FAQ SECTION ----------------

const faqItems = document.querySelectorAll(".faq-question");

if(faqItems.length > 0){

faqItems.forEach(button => {

button.addEventListener("click", () => {

const item = button.parentElement;

item.classList.toggle("active");

});

});

}



// ---------------- INDUSTRY SLIDER ----------------

const industrySlider = document.getElementById("industrySlider");

const nextBtn = document.getElementById("next");

const prevBtn = document.getElementById("prev");

if(industrySlider && nextBtn && prevBtn){

nextBtn.onclick = () => {

industrySlider.scrollLeft += 300;

};

prevBtn.onclick = () => {

industrySlider.scrollLeft -= 300;

};

}



// ---------------- PROCESS TABS ----------------

const tabs = document.querySelectorAll(".process-tabs button");

if(tabs.length > 0){

tabs.forEach(tab => {

tab.addEventListener("click", () => {

tabs.forEach(btn => btn.classList.remove("active"));

tab.classList.add("active");

});

});

}



// ---------------- TESTIMONIAL AUTO SLIDER ----------------

const testimonialSlider = document.getElementById("testimonialSlider");

if(testimonialSlider){

setInterval(()=>{

if(testimonialSlider.scrollLeft >= testimonialSlider.scrollWidth - testimonialSlider.clientWidth){

testimonialSlider.scrollLeft = 0;

}else{

testimonialSlider.scrollLeft += 340;

}

},3000);

}