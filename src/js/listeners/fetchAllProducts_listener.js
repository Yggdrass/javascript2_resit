import { API_ALL_ENTRIES_URL } from "../api/api_base.js";

const productsContainer = document.getElementById("products-container");
console.log("Entries Container :", productsContainer);

const allEntriesUrl = `${API_ALL_ENTRIES_URL}`;
console.log("All Entries URL :", allEntriesUrl);

const search = document.getElementById("searchEntries");
console.log("Search Bar :", search);

const singleProductPage = document.getElementById("product-container");
console.log("Single Product Page :", singleProductPage);

/**
 * Fetches all entries from the server and displays them on a page.
 * @param {parameter} results The results in json-form recieved from the call.
 *
 */
export async function fetchAllEntries() {
  const response = await fetch(allEntriesUrl);
  //console.log("Response Json :", response);
  let results = await response.json();
  //console.log("Response Json :", results);
  let products = results.products;

  for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML += ` <!-- Product Listing Card -->
    <a href="product_details.html?id=${products[i].id}">
    <div class="productCard mx-auto mb-5">
      <div class="px-4 py-3">
        <!-- Image Shwcase -->
        <div class="row pb-3">
          <div class="col-4">
            <img
              src="${products[i].thumbnail}"
              alt="entry image"
            />
          </div>
  
        </div>

          <!-- Card Info -->
          <div class="col-8">
            <h5 class="productTitle">Title: ${products[i].title}</h5>
            <h5 class="productId">Brand: ${products[i].brand}</h5>
            <h5 class="productCreated">Category: ${products[i].category}</h5>
          </div>
        
          <!-- Card Description -->
        <div class="row">
          <h5 class="productDescriptionTitle">Description</h5>
          <p class="productDescriptionText">
          ${products[i].description}
          </p>
        </div>

      


        <!-- Interaction Icons On Entry -->
        <div class="px-3 d-flex justify-content-md-end">
          <i class="fa-solid fa-gavel d-flex-row"></i>
        </div>
      </div>
    </div>
    </a> `;
    //console.log(products[i].title);
  }
}

fetchAllEntries();
//console.log("Function", fetchAllEntries);

/*

  I tried to make this keyup event work to make it possible to search through entries in the searchbar. 
  I logged the information in console.log but I could not make it possible to change the array and display the entries on the page.

  search.onkeyup = function () {
  console.log("On Key :", event);

  const searchValue = event.target.value.trim().toLowerCase();

  const filteredEntries = results.filter(function (entry) {
    if (entry.title.toString().toLowerCase().startsWith(searchValue)) {
      return;
    }
  });

  console.log("Filtered Entries :", filteredEntries);

  results = filteredEntries;

  fetchAllEntries();
}; */

//entriesContainer.innerHTML += "";

//results.forEach(function (result) {
/*entriesContainer.innerHTML += `<!-- Art Listing Card -->
        <div class="listedArtCard mx-auto mb-5">
          <div class="container px-4 py-3">
            <!-- Image Showcase -->
            <div class="row pb-3">
              <div class="col-4">
                <img
                  src="/src/images/company_logo_black_white.png"
                  alt="imageCarousel"
                />
              </div>

              <!-- Card Info -->
              <div class="col-8">
                <h5 class="artTitle">Title: Title Goes Here</h5>
                <h5 class="artId">ID: Art ID</h5>
                <h5 class="artCreated">Created: Date here</h5>
                <h5 class="artEnds">Ends: End Date Here</h5>
              </div>
            </div>

            <!-- Card Description -->
            <div class="row">
              <h5 class="artDescriptionTitle">Description</h5>
              <p class="artDescriptionText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                porttitor ullamcorper tempus. Vestibulum volutpat gravida justo,
                non hendrerit ligula feugiat nec. Aenean tortor turpis,
                tincidunt vitae orci ac, vehicula euismod nisi. Proin sagittis,
                est in viverra rutrum, orci sapien vulputate magna, quis
                tincidunt dui lacus sed eros. Morbi vitae metus ac diam
                tristique dignissim.
              </p>
            </div>

            <!-- Interaction Icons On Entry -->
            <div class="px-3 d-flex justify-content-md-end">
              <i class="fa-solid fa-gavel d-flex-row"></i>
            </div>
          </div>
        </div>
`;*/