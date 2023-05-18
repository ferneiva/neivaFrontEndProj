let slideIndex=1;
// 'Here we call the function showSlides with argument slideIndex
// The function was declareth beneath
// functions declared with the "function" keyword have this weird feature
showSlides(slideIndex);

// n is a parameter to the function
function plusSlides(n) { //<----//why is the n there
// here we assign slideIndex to have value its previous value plus "n" value
// then we call showSlides with that value, e.g. showSlides(1+3)
showSlides(slideIndex+=n);// <----
}

// here once more we declare a function, named currentSlide, which takes a single parameter(called n)
// this time we assign the value of slideIndex to be equal n and call showSlides with that value
// for example currentSlide(5) would make slideIndex = 5 and then call showSlides(5)
function currentSlide(n){ //<----
showSlides(slideIndex=n); //<----
}

// declaring the infamous showSlides function
// its a bit counter-intuitive to have this bottom to top declarative chain
function showSlides(n){
// i is simply declared to exist, with let we dont have to give initial value, it would be undefined
let i; //<---- //why is i not assigned anything
let slides= document.getElementsByClassName("mySlides");
let dots= document.getElementsByClassName("dot");
// if n(the argument passed to showSlides) is greater than the slides(lendgth), reset slidesIndex to its initial value(1)
if (n>slides.length){slideIndex=1} //<----
// if n is less than 1, slidesIndex becomes the slides number/length
// this way whenever we run out of slides(sliding left/fight/bot/top), the value goes to the start/end
if (n<1){slideIndex=slides.length} //<----
// if you dont know how for loop works, i cant help :)
// this whole for loop purpose is to iterate through the slides and set each one to display:none
// display: none; is a css rule which removes an element from the DOM, making it "dissapear"
for (i=0; i<slides.length; i++){//<---- i get completely lost here
slides[i].style.display="none"//<----
}
// this for loop iterates through the "dots"(elements with class name "dots"
// and remove the class "active"(deactivating its applied styles)
for (i=0; i<dots.length; i++){//<----
dots[i].className=dots[i].className.replace(" active", "");//<----
}
// this will grab the slide with index "slideIndex - 1"(refer to current slideIndex value upper)
// and set its display to "block"(recall earlier we made all to be "none"
// this way only the one with style block, will be visible
slides[slideIndex-1].style.display="block";//<----
// here, once again we target the dot with the same index as the slide we target above
// and assigng to it the class "active"
// i assume that class has the purpose to outline the dot from all others
dots[slideIndex-1].className +="active";//<----
}