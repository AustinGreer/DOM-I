const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//UPDATE HEADER
// 1. Selectors
const nav = document.querySelector("nav")
const navLinks = document.querySelectorAll("nav a")

// 2. Add text content
navLinks.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index + 1}`]
})


//UPDATE CTA SECTION
// 1. Selectors
const ctaHeading = document.querySelector("h1")
const ctaButton = document.querySelector("button")
const ctaImg = document.querySelector("#cta-img")

// 2. Add Content
ctaHeading.innerHTML = "Dom <br> Is <br> Awesome"
ctaButton.textContent = siteContent.cta.button
ctaImg.src = siteContent.cta["img-src"]

//UPDATE MAIN CONTENT SECTION
// 1. Selecors
const textContentHeading = document.querySelectorAll(".text-content h4")
const textContentParagraph = document.querySelectorAll(".text-content p")
const middleImg = document.querySelector("#middle-img")

// 2. Add content - 
// a. headings
textContentHeading[0].textContent = siteContent["main-content"]["features-h4"]
textContentHeading[1].textContent = siteContent["main-content"]["about-h4"]
textContentHeading[2].textContent = siteContent["main-content"]["services-h4"]
textContentHeading[3].textContent = siteContent["main-content"]["product-h4"]
textContentHeading[4].textContent = siteContent["main-content"]["vision-h4"]

// b. paragraphs
textContentParagraph[0].textContent = siteContent["main-content"]["features-content"]
textContentParagraph[1].textContent = siteContent["main-content"]["about-content"]
textContentParagraph[2].textContent = siteContent["main-content"]["services-content"]
textContentParagraph[3].textContent = siteContent["main-content"]["product-content"]
textContentParagraph[4].textContent = siteContent["main-content"]["vision-content"]

// c. middle img
middleImg.src = siteContent["main-content"]["middle-img-src"]

//UPDATE CONTACT
// 1. Selectors
const contactHeading = document.querySelector(".contact h4")
const contactParagraphs = document.querySelectorAll(".contact p")

// 2. add content
contactHeading.textContent = siteContent.contact["contact-h4"]
contactParagraphs[0].innerHTML = "23 Way 456 Street, <br> Somewhere, USA"
contactParagraphs[1].textContent = siteContent.contact.phone
contactParagraphs[2].textContent = siteContent.contact.email

//UPDATE FOOTER
// 1. Selector
const footerParagraph = document.querySelector("footer p")

// 2. Content
footerParagraph.textContent = siteContent.footer.copyright

// ADDING NEW CONTENT
// 1. Change color of nav text to green
navLinks.forEach(link => {
  link.style.color = "green"
})

// 2. Utilize both appendChild and prepend to add two new items to nav
const blogLink = document.createElement("a")
blogLink.setAttribute("href", "#")
blogLink.textContent = "Blog"
blogLink.style.color = "green"

nav.appendChild(blogLink)

const helpLink = document.createElement("a")
helpLink.setAttribute("href", "#")
helpLink.textContent = "Help"
helpLink.style.color = "green"

nav.prepend(helpLink)


//STRETCH
// 1. Update styles
document.querySelector("body").style.backgroundColor = "lightBlue"

textContentHeading.forEach(heading => {
  heading.style.color = "navy"
})

textContentParagraph.forEach(paragraph => {
  paragraph.style.color = "white"
  paragraph.style.backgroundColor = "black"
})


// 2. Update Button

