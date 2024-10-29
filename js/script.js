// Back To Top 

const backToTop = ()=>{
  const backToTopBtn = document.querySelector('.backToTop')

  backToTopBtn.addEventListener("click", ()=>{
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    })
  })
  
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 1500){
      backToTopBtn.classList.add('showBackToTop')
    }else{
      backToTopBtn.classList.remove('showBackToTop')
    }
  })
}
document.addEventListener('DOMContentLoaded', backToTop)

// Navbar
const userScroll = () => {
  const navbar = document.querySelector(".navbar");
  const navbarLogo = document.querySelector(".navbar-logo");

  const isHomePage = window.location.pathname === "/" || window.location.pathname === "/index.html"

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      // navbar.classList.add('bg-dark')
      navbar.classList.remove("navbar-dark");
      navbar.classList.add("navbar-sticky");
      navbarLogo.setAttribute("src", "./images/Luxus-logo.webp");
    } else {
      navbar.classList.remove("navbar-sticky");
      if(isHomePage){
        navbar.classList.add('navbar-dark')
        navbarLogo.setAttribute("src", "./images/Luxus-Light-1.webp");
      }
    }
  });
};

const navLinks = document.querySelectorAll('.navbar-nav .nav-link')

navLinks.forEach((link)=>{
  if(link.href === window.location.href){
    link.classList.add('active')
  }
})

document.addEventListener("DOMContentLoaded", userScroll);

// Side Navbar
const sideNavbar = document.querySelector(".side-navbar");
const closeBtnSideNav = document.querySelector(".close-btn-sidenav");
const navbarToggler = document.querySelector(".navbar-toggle");
navbarToggler.addEventListener("click", () => {
  sideNavbar.classList.toggle("show-side-navbar");
});
closeBtnSideNav.addEventListener("click", () => {
  sideNavbar.classList.toggle("show-side-navbar");
});

// Advance Search Container
const gearBtn = document.querySelector("#fa-gear");
const advanceSearchContainer = document.querySelector(
  ".advance-search-container"
);

gearBtn.addEventListener("click", () => {
  advanceSearchContainer.classList.toggle("show-advance-search-container");
});

// Video Modal
const videoBtn = document.querySelector(".about-video-btn");
const videoModal = document.querySelector("#aboutVideoModal");
const video = document.querySelector("#aboutVideo");

let videoSrc;

if (videoBtn !== null) {
  videoBtn.addEventListener("click", () => {
    videoSrc = videoBtn.getAttribute("data-bs-src");
  });
}

if (videoModal !== null) {
  videoModal.addEventListener("shown.bs.modal", () => {
    video.setAttribute(
      "src",
      videoSrc + "?autoplay=1&modestbranding=1&showinfo=0"
    );
  });

  videoModal.addEventListener("hidden.bs.modal", () => {
    video.setAttribute("src", ""); // Stop the video when the modal is closed
  });
}

// Increament counter Stats
function incrementStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target"); // here + is used to type casting string to number.

      const c = +counter.innerText;

      const increment = target / 300;

      if (c < target) {
        counter.innerText = Math.ceil(c + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}
document.addEventListener("DOMContentLoaded", incrementStats);

// For Featured Property//
const listFeaturedProperty = () => {
  // Fetch data from the JSON file
  fetch("../data/propertiesData.json")
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.querySelector(
        "#featured-property-slider-wrapper"
      ); // The container for all cards
      cardContainer.innerHTML = ""; // Clear container content before adding cards

      const featuredProperty = data.filter((item) => item.featured);
      // Loop through each data item and create a card
      featuredProperty.forEach((item) => {
        const cardHTML = `
                  <div class="swiper-slide">
                    <div class="card rounded-3 border-0" style="width: 25rem; height: 18rem">
                      <div class="image-container position-relative overflow-hidden rounded-3" style="height: 100%">
                        <img
                          src="${item.image}"
                          class="latestPropertyCardImg card-img-top rounded-3 text-capitalize"
                          alt="${item.title}"
                        />
                        <div class="image-top p-3 position-absolute top-0 w-100 d-flex justify-content-between">
                          <div class="left">
                            ${
                              item.featured
                                ? '<span class="badge bg-primary text-capitalize" style="background-color: #3E2AD3 !important;">Featured</span>'
                                : '<span class="p-2"></span>'
                            }
                            <span class="badge bg-orange rounded-1">
                              <a href="#" class="text-decoration-none text-white text-capitalize">${
                                item.type
                              }</a>
                            </span>
                            <span class="badge bg-light-green rounded-1">
                              <a href="#" class="text-decoration-none text-white text-capitalize">${
                                item.status
                              }</a>
                            </span>
                          </div>
                          <div class="right">
                            <i class="fa-regular fa-heart text-primary bg-white p-1 rounded-1"></i>
                            <i class="fa-solid fa-arrow-right-arrow-left text-primary bg-white p-1 rounded-1"></i>
                          </div>
                        </div>

                        <div class="image-bottom position-absolute bottom-0 w-100 rounded-bottom-3 text-white">
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="left">
                              <p class="fw-light mb-1 text-capitalize" style="font-size: 14px">
                                <i class="fa-regular fa-location-dot"></i>
                                ${item.location}
                              </p>
                              <h5 class="card-title fw-bold text-capitalize">
                                <a href="#" class="text-decoration-none text-white text-capitalize">${
                                  item.title
                                }</a>
                              </h5>
                            </div>
                            <div class="right">
                              <a href="#" class="">
                                <i class="opacity-0 center-button fa-solid fa-arrow-right fs-3 p-2 rounded-circle text-white bg-primary"></i>
                              </a>
                            </div>
                          </div>
                          <hr style="border-top: 2px dotted white !important"/>
                          <div class="d-flex justify-content-between align-items-center">
                            <div class="left">
                              <p class="my-0 text-capitalize">${
                                item.size
                              } m² Sqft</p>
                            </div>
                            <div class="right">
                              <span class="me-3">
                                <i class="fa-solid fa-bed"></i>
                                ${item.bedrooms || "NA"}
                              </span>
                              <span class="me-3">
                                <i class="fa-solid fa-bath"></i>
                                ${item.bathrooms || "NA"}
                              </span>
                              <span>
                                <i class="fa-solid fa-car"></i>
                                ${item.parking || "NA"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  `;

        // Append the card to the container
        cardContainer.innerHTML += cardHTML;
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
};
document.addEventListener("DOMContentLoaded", listFeaturedProperty);

// Radio button Toggler
let lastSelectedRadio = null;

function toggleRadio(currRadio) {
  if (lastSelectedRadio === currRadio) {
    currRadio.checked = false;
    lastSelectedRadio = null;
  } else {
    lastSelectedRadio = currRadio;
  }
}
