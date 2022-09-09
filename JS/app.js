/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Variables
 * 
*/
const header = document.querySelector('header');
const mainNavBar = document.querySelector('.ulNav');
const navBarList = document.querySelectorAll('section') 

const logo = document.getElementById('logo');
const queensGambit = document.getElementById('secondPic')
const magnusCarlsen = document.getElementById('thirdPic')

/**
 * End Global Variables
 * 
 * Start Helper Functions
*/

for (let section of navBarList) {
    let newListItem = document.createElement('li');
    mainNavBar.appendChild(newListItem);
    const dataName = section.dataset.topic
    const sectionId = section.id
    newListItem.innerHTML=`<a href="#${sectionId}">${dataName}</a>`
}

/**
 * End Helper Functions
 * 
 * Adding Anchor links
*/

header.style.cssText =" position:sticky; background:#000; color: #ffffff; padding: 0 30px 30px 30px; top: 0; left: 10; ";
mainNavBar.style.cssText ="border-bottom: 1px solid #f00;"

/**
 * End Anchor links
 * 
 * Highlights section in viewport upon scrolling
*/

window.addEventListener('scroll', () =>{makeActive()})
function makeActive(){
  for (const section of document.querySelectorAll('section')) {
      const box = section.getBoundingClientRect();
      const aboutMe = document.querySelector(`[href='#${section.id}']`)
      //Find a value that works best, but 150 seems to be a good start.
      if (box.top <= 150 && box.bottom >= 150) {
        aboutMe.classList.add('active');
        // console.log(section)
      //apply active state on current section and corresponding Nav link
      } else {
      //Remove active state from other section and corresponding Nav link
      aboutMe.classList.remove('active');
      }
   }
}

/**
 * Smooth scrolling to viewport
*/

const navLinkElements = document.querySelectorAll('.ulNav a')
const sections = document.querySelectorAll('section')
for(let i = 0; i < navLinkElements.length; i++) {
  navLinkElements[i].addEventListener('click', function (e) {
e.preventDefault();
sections[i].scrollIntoView({behavior: 'smooth'})
})
}

/**
 * Create form
*/

const divForm = document.createElement ('div')
divForm.style.cssText ="color: #FFF; border: 1px solid #ff0000; justify-content: center; align-content:center; width: 50%; height: auto; margin: 30px auto"

const divHeading = document.createElement ('h4')
divHeading.innerText = ("or send me a request via Mail:")
divForm.appendChild(divHeading)
divHeading.style.cssText ="margin: 10px 20px; padding: 10px 10px"

const challengeMeForm = document.createElement("form");

let inputName = document.createElement("input");
inputName.setAttribute("type", "text");
inputName.setAttribute("placeholder", "Name");
inputName.setAttribute("required", "")
console.log(inputName);
challengeMeForm.appendChild(inputName);
inputName.style.cssText ="background-color: #000; color:#ff0000; border: 1px solid #ff0000; border-radius: 10px; padding: 10px 10px; margin: 10px 20px; width: 75%"

let inputRating = document.createElement("input");
inputRating.setAttribute("type", "text");
inputRating.setAttribute("placeholder", "Rating");
challengeMeForm.appendChild(inputRating);
inputRating.style.cssText ="background-color: #000; color:#ff0000; border: 1px solid #ff0000; border-radius: 10px; padding: 10px 10px; margin: 10px 20px; width: 75%"

 let inputEmail = document.createElement("input");
 inputEmail.setAttribute("type", "email");
 inputEmail.setAttribute("placeholder", "E-Mail");
 challengeMeForm.appendChild(inputEmail);
 inputEmail.style.cssText ="background-color: #000; color:#ff0000; border: 1px solid #ff0000; border-radius: 10px; padding: 10px 10px; margin: 10px 20px; width: 75%"
 inputEmail.setAttribute("required", "")

let submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");

challengeMeForm.addEventListener('submit', function (e){
  e.preventDefault();
  alert("you have successfully sent a challenge!"); });

challengeMeForm.appendChild(submitButton); 
submitButton.style.cssText ="background-color: #000; color:#ff0000; border: 1px solid #ff0000; border-radius: 10px; padding: 10px 10px; margin: 10px 20px;"

divForm.appendChild(challengeMeForm)
const challengeMeMain = document.getElementById('challengeMeMain')
challengeMeMain.appendChild(divForm)