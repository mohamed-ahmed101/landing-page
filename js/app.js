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
var sections
(function (window, document, undefined) {

    // code that should be taken care of right away

    window.onload = init;

    function init() {
        sections = document.querySelectorAll("section");
        let delay = null;
        document.addEventListener("scroll", function () {
            if (!isNaN(delay)) { clearTimeout(delay); }
            delay = setTimeout(checkVisibleSection, 100);
        });
    }

})(window, document, undefined);

function checkVisibleSection() {
    console.log("now checkVisibleSection running")
    var minor = window.innerHeight, section = null;
    console.log("minor", minor);

    for (const item of sections) {
        var offset = item.getBoundingClientRect();
        if (Math.abs(offset.top) < minor) {
             minor = Math.abs(offset.top);
             section = item;
         }
    }
    if (section) {
        let id = section.id
        deactivateSection();
        activateSection(`#${id}`)
    }
}
/**
 * Define Global Variables
 * 
*/
const $root = $('html, body');
const activeSectionCalss = "your-active-class";
const content = [{
    anchorText: "section1",
    anchorCalss: "menu__link",
    sectionId: "section1",
    sectionDataNav: "Section 1",
    sectionCalss: activeSectionCalss,
    sectionDivCalss: "landing__container",
    sectionParagraphs: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
    dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
    imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
    bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
    elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
    nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`, `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
    luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
    porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
    ]

}, {
    anchorText: "section2",
    anchorCalss: "menu__link",
    sectionId: "section2",
    sectionDataNav: "Section 2",
    sectionDivCalss: "landing__container",
    sectionParagraphs: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
    dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
    imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
    bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
    elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
    nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`, `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
    luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
    porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
    ]

},
{
    anchorText: "section3",
    anchorCalss: "menu__link",
    sectionId: "section3",
    sectionDataNav: "Section 3",
    sectionDivCalss: "landing__container",
    sectionParagraphs: [`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
    dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
    imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
    bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
    elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
    nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`, `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
    luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
    porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`
    ]

}]
var navBarList = document.querySelector('#navbar__list');
let main = document.querySelector('main');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function constructItem(contentItems) {
    for (const { anchorText, anchorCalss, ...rest } of contentItems) {
        buildLiItem({ anchorText, anchorCalss });
        buildSection(rest);
    }
}

function buildLiItem({ anchorText, anchorCalss }) {

    var li = document.createElement('li');
    li.innerHTML = `<a class ="${anchorCalss}" onclick="_anchorOnClick(event)" href="#${anchorText}"> ${anchorText}</a>`
    navBarList.appendChild(li);
}

function buildSection({ sectionId, sectionDataNav, sectionCalss, sectionDivCalss, sectionParagraphs }) {

    let section = document.createElement('section');
    section.setAttribute('id', sectionId);
    section.setAttribute('data-nav', sectionDataNav);
    sectionCalss && section.classList.add(...[sectionCalss])


    let innerDiv = document.createElement('div');
    sectionDivCalss && innerDiv.classList.add(...[sectionDivCalss]);

    let header = document.createElement('h2');
    header.textContent = sectionDataNav;
    innerDiv.appendChild(header);
    for (const paragraph of sectionParagraphs) {
        var paragraphElement = document.createElement('p');
        paragraphElement.textContent = paragraph;
        innerDiv.appendChild(paragraphElement);
    }
    section.appendChild(innerDiv);
    main.appendChild(section);
}

function deactivateSection() {
    let activeSection = document.querySelector(`.${activeSectionCalss}`);
    activeSection.classList.remove(activeSectionCalss);
}




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
constructItem(content);

// Add class 'active' to section when near top of viewport
function _anchorOnClick(event) {
    deactivateSection();
    activateSection(event.target.hash)
    event.preventDefault();
    smoothScroll(event.target)
    //console.log("anchor clicked" ,event.target.hash)
}

// Scroll to anchor ID using scrollTO event

function smoothScroll(target) {
    $root.animate({
        scrollTop: $($.attr(target, 'href')).offset().top
    }, 500);

    // 'swing', function () {
    //     window.location.hash = target;
    //     $(document).on("scroll", onScroll);
    // }
}


function onScroll(event) {
    console.log("EEEEEEEEE", event.target)
    var scrollPos = $(document).scrollTop();
    $('section').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        console.log("=>>>>>>>>>>>>", currLink, refElement);
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#navbar__list li a').removeClass(activeSectionCalss);
            currLink.addClass(activeSectionCalss);
        }
        else {
            currLink.removeClass(activeSectionCalss);
        }
    });
}
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

function activateSection(sectionId) {
    let sectionToActive = document.querySelector(sectionId);
    sectionToActive.classList.add(activeSectionCalss);
}
