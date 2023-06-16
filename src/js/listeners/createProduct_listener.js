import { API_CREATE_PRODUCT_URL } from "../api/api_base.js";
import { createProduct } from "../products/createProduct.js";

const createProductURL = `${API_CREATE_PRODUCT_URL}`;
//console.log("createProductURL :", createProductURL);

/**
 * This function gathers the information from a form and passes it to the server as an Product.
 */
export function createProductListener() {
  const createProductForm = document.getElementById("createProduct");
  //console.log("Create Product Form :", createProductForm);

  if (createProductForm) {
    createProductForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const entryData = Object.fromEntries(formData.entries());
      console.log("ProductToCreate :", entryData);

      // Sends to the API
      createProduct(createProductURL, entryData);
      //console.log("Function :", createProduct);
    });
  } else {
    console.log("error");
  }
}

createProductListener();
