import { API_ALL_ENTRIES_URL } from "../api/api_base.js";

const productsContainer = document.getElementById("products-container");
//console.log("Products Container :", productsContainer);

const allProductsUrl = `${API_ALL_ENTRIES_URL}`;
//console.log("All Products URL :", allEntriesUrl);

const search = document.getElementById("search-products");
//console.log("Search Bar :", search);

//const singleProductPage = document.getElementById("product-container");
//console.log("Single Product Page :", singleProductPage);

/**
 * This function makes an API call in order to get the entire list of products.
 * @returns a list of all products in the API-call.
 */
async function fetchAllProducts() {
  const response = await fetch(allProductsUrl);
  //console.log("Response Json :", response);
  let results = await response.json();
  //console.log("Response Json :", results);
  const products = results.products;
  //console.log("Products :", products);
  return products;
}

const products = await fetchAllProducts();
console.log(products);

let productsToRender = products;

/**
 * This function renders the list of products so it is possible to both view the list and search through it with a onkeyup event.
 */
function renderProducts() {
  productsContainer.innerHTML = "";

  productsToRender.forEach(function (product) {
    productsContainer.innerHTML += ` <!-- Product Listing Card -->
    
    <div class=" mx-auto mb-5">
      <div class="productCard px-4 py-3">
        <!-- Image Shwcase -->
        <div class="row pb-3">
          <div class="col-6">
            <img
              src="${product.thumbnail}"
              alt="product image"
              id="productThumbnail"
            />
          </div>
  
        </div>

          <!-- Card Info -->
          <div class="productAttributes">
            <h5 class="productTitle">Title: ${product.title}</h5>
            <h5 class="productId">Brand: ${product.brand}</h5>
            <h5 class="productCreated">Category: ${product.category}</h5>
          </div>
        
          <!-- Card Description -->
        <div class="productDescription row">
          <h5 class="productDescriptionTitle">Description</h5>
          <p class="productDescriptionText">
          ${product.description}
          </p>
        </div>

      

      
        <!-- Interaction Icons On Product & Link Button -->
        <div class="d-flex align-items-center justify-content-between">
          <a id="view_product_link" href="product_details.html?id=${product.id}">VIEW PRODUCT</a>

          
        </div>
      </div>
    </div> `;
  });
}

renderProducts();

/**
 * This function makes it possible to search through the list of products in the renderProducts() function. It takes the search value from an input field in the ./products.html,
 * and then updates the list with product categories that matches the search value.
 */
search.onkeyup = function () {
  //console.log(event);

  const searchValue = event.target.value.trim().toLowerCase();
  console.log(searchValue);

  const filteredProducts = products.filter(function (product) {
    if (product.category.toLowerCase().includes(searchValue)) {
      return true;
    }
  });
  console.log(filteredProducts);

  productsToRender = filteredProducts;

  renderProducts();
};

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
