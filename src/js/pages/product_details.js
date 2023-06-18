import { SINGLE_PRODUCT_URL } from "../api/api_base.js";

const detailsContainer = document.querySelector("#productDetails-container");
//console.log("Details Container", detailsContainer);

const queryString = document.location.search;
//console.log("QueryString", queryString);

const params = new URLSearchParams(queryString);
//console.log("Params", params);

const id = params.get("id");
//console.log("Const ID", id);

const singleProductUrl = `${SINGLE_PRODUCT_URL}`;
//console.log("singleProductUrl :", singleProductUrl);

const newSingleProductUrl = "https://dummyjson.com/products/" + id;
//console.log("newSingleProductUrl :", newSingleProductUrl);

/**
 * This function fetches the ID from the searchQuery in order to get the info on the product so it can be displayed in the ./details page.
 */

export async function fetchProduct() {
  try {
    const response = await fetch(newSingleProductUrl);
    //console.log("Response :", response);
    const products = await response.json();
    //console.log("Products :", products);

    createHtml(products);
  } catch (error) {
    //console.log("Catch Error :", error);
  }
}

fetchProduct();

function createHtml(products) {
  detailsContainer.innerHTML += `
        <div class="productDetails d-flex-column align-items-center mb-5">
            <h2>${products.title}</h2>
            <img
            src="${products.thumbnail}"
            alt="entry image"
            id="productThumbnail"
            />
            <!-- Card Info -->
            <div class="col-8">
                <h5 class="productTitle">Title: ${products.title}</h5>
                <h5 class="productId">Brand: ${products.brand}</h5>
                <h5 class="productCreated">Category: ${products.category}</h5>
                <h5 class="productCreated">Price: ${products.price}</h5>
                <h5 class="productCreated">Discount: ${products.discountPercentage}</h5>
                <h5 class="productCreated">Rating: ${products.rating}</h5>
                <h5 class="productCreated">In Stock: ${products.stock}</h5>
                <h5 class="productCreated">Description: ${products.description}</h5>
            </div>

            

            <div class="productImages">
                <img src="${products.images[0]}" alt="product image" id="productThumbnail"/>
                <img src="${products.images[1]}" alt="product image" id="productThumbnail"/>
                <img src="${products.images[2]}" alt="product image" id="productThumbnail"/>
                <img src="${products.images[3]}" alt="product image" id="productThumbnail"/>
                <img src="${products.images[4]}" alt="product image" id="productThumbnail"/>
            </div>
        </div>
    `;
}
