const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h3").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}
const numbers = document.querySelectorAll('.number');
const svgEl = document.querySelectorAll('svg circle');
const counters = Array(numbers.length);
const intervals = Array(counters.length);
counters.fill(0);

numbers.forEach((number, index) => {
    intervals[index] = setInterval(() => {
        if(counters[index] === parseInt(number.dataset.num)){
            clearInterval(counters[index]);
        }else{
            counters[index] += 1;
            number.innerHTML = counters[index] + "%";
            svgEl[index].style.strokeDashoffset = Math.floor(472 - 440 * parseFloat(number.dataset.num / 100));
        }
    }, 20);
});
function nextPage2(){
    window.location.href = "AI.html";
}
function card1(){
    window.location.href = "card1.html";
}
function card2(){
    window.location.href = "card2.html";
}
function card3(){
    window.location.href = "card3.html";
}
function card4(){
    window.location.href = "card4.html";
}
function card5(){
    window.location.href = "card5.html";
}
function card6(){
    window.location.href = "card6.html";
}
function card7(){
    window.location.href = "card7.html";
}
function card8(){
    window.location.href = "card8.html";
}