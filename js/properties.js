document.addEventListener("DOMContentLoaded", () => {
  // Fetch data from the JSON file
  fetch("../data/propertiesData.json")
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.querySelector("#card-container"); // The container for all cards
      cardContainer.innerHTML = ""; // Clear container content before adding cards

      // Loop through each data item and create a card
      data.forEach((item) => {
        const cardHTML = `
                  <div class="card-column col-12">
                    <div class="card rounded-3 border-0">
                      <div class="row g-0">
                        <div class="card-column-image col-md-6">
                          <div class="image-container position-relative overflow-hidden rounded-3">
                            <img
                              src="${item.image}"
                              class="latestPropertyCardImg card-img-top rounded-3 text-capitalize"
                              alt="${item.title}"
                            />
                            <a href="#" class="">
                              <i
                                class="opacity-0 center-button fa-solid fa-arrow-up fs-2 px-2 py-1 rounded-circle text-white bg-dark position-absolute start-50 top-50"
                              ></i>
                            </a>
                            <div class="image-top p-3 position-absolute top-0 w-100 d-flex justify-content-between">
                              <div class="left">
                                ${
                                  item.featured
                                    ? '<span class="badge bg-primary">Featured</span>'
                                    : ""
                                }
                              </div>
                              <div class="right">
                                <a href="" class="text-decoration-none">
                                  <span class="badge bg-orange rounded-0 text-capitalize">${
                                    item.type
                                  }</span>
                                </a>
                                <a href="" class="text-decoration-none">
                                  <span class="badge bg-light-green rounded-0 text-capitalize">${
                                    item.status
                                  }</span>
                                </a>
                              </div>
                            </div>
                            <div class="image-bottom position-absolute bottom-0 w-100 rounded-bottom-3 d-flex justify-content-between align-items-center">
                              <div class="left">
                                <p class="text-white my-0">${item.size} m² Sqft</p>
                                <p class="text-white my-0">$${item.price}</p>
                              </div>
                              <div class="right">
                                <i class="favourite fa-regular fa-heart text-primary bg-white p-1 rounded-1"></i>
                                <i class="compare fa-solid fa-arrow-right-arrow-left text-primary bg-white p-1 rounded-1"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card-column-text col-md-6">
                          <div class="card-body mt-2 py-1">
                            <h5 class="card-title fw-bold">
                              <a href="#" class="text-decoration-none text-black text-capitalize">
                                ${item.title}
                              </a>
                            </h5>
                            <p class="fw-light mb-3" style="font-size: 14px">
                              <i class="fa-regular fa-location-dot text-capitalize"></i>
                              <span class="text-capitalize">
                              ${item.location}</span>
                            </p>
                            <div class="features row text-center py-2 mx-1 rounded-1 mb-2" style="border: 2px dotted #d1c2e9">
                              <div class="col-4">
                                <p class="fw-light my-0">Bedrooms</p>
                                <p class="fw-light my-0">
                                  <i class="fa-solid fa-bed text-primary"></i> ${item.bedrooms || "NA"}
                                </p>
                              </div>
                              <div class="col-4 border-start border-end">
                                <p class="fw-light my-0">Bathrooms</p>
                                <p class="fw-light my-0">
                                  <i class="fa-solid fa-bath text-primary"></i> ${item.bathrooms}
                                </p>
                              </div>
                              <div class="col-4">
                                <p class="fw-light my-0">Parking</p>
                                <p class="fw-light my-0">
                                  <i class="fa-solid fa-car text-primary"></i> ${item.parking}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="card-footer bg-white border-0 d-flex justify-content-between">
                            <span style="font-size: 14px">
                              <i class="fas fa-circle-user"></i>
                              <a href="#" class="agent text-decoration-none text-dark fw-light text-capitalize">${
                                item.agent
                              }</a>
                            </span>
                            <span style="font-size: 14px">
                              <i class="fas fa-calendar"></i>
                              <a href="#" class="date text-decoration-none text-dark fw-light text-capitalize">${
                                item.date
                              }</a>
                            </span>
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
});
