const slider = document.querySelector(".student-slider"); //Selects HTML-element with class "student-slider".
const slides = document.querySelectorAll(".student-picture"); //Selects all HTML-elements with the class "student-picture".
const button = document.querySelectorAll(".button"); //Selects all HTML-elements with the class "button".

/**
 * These variables store the indices of the current, previous and next pictures in the slider.
 */

let current = 0; 
let prev = 11; 
let next = 1; 

/**
 * This for-loop sets up click event listeners for each button.
 * When a button is clicked, it checks if the button index is 0. 
 * If this is true, it calls the gotoPrev-function, otherwise it calls the gotoNext-function
 */
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

/**
 * This function is responsible for moving to the previous slide. 
 * If the current slideindex is greater than 0, it moves back one.
 * If at the first picture, it goes to -1, moving it to the "final" picture of the slide.
 */

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

/**
 * This function is responsible for moving to the next slide. 
 * If the slideIndex is greater than 0, it moves forward one. 
 * If at the last picture, wraps around by going back to 0(first picture). 
 */

const gotoNext = () => current < 11 ? gotoNum(current +1) : gotoNum(0);


//This function is called by "gotoPrev" and "gotoNext" to update the slide indices.  
const gotoNum= number => {
  current = number;
  prev = current - 1;
  next = current + 1;

// This loop removes the classes "active", prev and next from all slides when changing pictures.
  for (let i = 0; i < slides.length; i++) {
    slides [i].classList.remove("active");
    slides [i].classList.remove("prev");
    slides [i].classList.remove("next");
  }

  /**
   * These conditions check if next is equal to 12 or if prev is equal to 11.
   * If either of these are true, adjusts them so they fit the range of the picture slides.
   */ 
  if (next == 12) {
    next = 0;
  }

  if (prev == -1) {
    prev = 11
  }

  /**
   * This adds the classes to the slides based on their indices.
   * In combination with earlier removal makes sure only one class of each exists at each update.
   */

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
}
