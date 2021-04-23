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
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const menu = document.getElementById('navbar__list');
// To append created nav items to it for the sake of performance
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function buildTheNav(){
    // Loop on the sections list using a for..of loop
    for(const section of sections){
        // Create <li> elements  && Create <a> elements
        let listItem = document.createElement('li');
        let anchor = document.createElement('a');
        let sectionName = section.getAttribute('data-nav');
        let sectionLink = section.getAttribute('id');
        let textNode = document.createTextNode(sectionName);

        anchor.appendChild(textNode);
        listItem.appendChild(anchor);
        fragment.appendChild(listItem);
        menu.appendChild(fragment);

        // Append anchor <a> element as a child of <li> element + Add <li> to the <ul> menu
        // listItem.appendChild(anchor);
        // menu.appendChild(listItem);

        // Use the value of each section’s data-nav attribute to create the text inside each anchor <a> tag
        anchor.textContent = sectionName;

        // The value of each section id attribute to create the value of anchor’s href attribute in addition to symbol #
        anchor.setAttribute('href','#'+sectionLink);
        
        // Add class menu__link to each <a>
        anchor.classList.add("menu__link");

        anchor.addEventListener("click", (event) => {
            section.scrollIntoView({ behavior: "smooth" });
        });
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav    
buildTheNav();



// Check out the position of the viewport
function sectionInViewPort(element){
    let sectionPosition = element.getBoundingClientRect();
    
    // Detecting if sectionElement is fully visible
    if(sectionPosition.top >= 0 && sectionPosition.top < 300) {
		return true;
	} else {
        return false;
    }
}


// Add class 'active' to section when near top of viewport
function toggleActiveState(){
    for(const section of sections){
        // If the section is in the Viewport
        if(sectionInViewPort(section)){
            // And if section doesn't have class 'active'
            if(!section.classList.contains('your-active-class')){
                // Add class 'active' to the section
                section.classList.add('your-active-class');
            }
        
            let links = document.querySelectorAll(".menu__link");  // Select all elements with class '.menu__link'
            links.forEach((link) => { // Use forEach method to add or remove class active from the <a> classes
                if (section.getAttribute("data-nav") == link.innerText) {
                link.classList.add("active"); // Add class active to the <a> element
                } else {
                link.classList.remove("active"); // Remove class active from the <a> element
                }
            });
        } else { 
            // Remove class 'active' from the section that is not in the viewport
            section.classList.remove('your-active-class')            
        }
        
        
    }
}
function scrollToAnchor() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
        // console.log(this.getAttribute("href"));
      });
    });
  }
// Scroll to anchor ID using scrollTO event
window.addEventListener('scroll', toggleActiveState); 

// Call function scrollToAnchor
scrollToAnchor()

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active