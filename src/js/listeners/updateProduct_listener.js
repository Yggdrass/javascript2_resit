import { API_UPDATE_PRODUCT_URL } from "../api/api_base.js";
import { updateProduct } from "../products/updateProduct.js";

const updateProductURL = `${API_UPDATE_PRODUCT_URL}`;
//console.log("updateProductURL :", updateProductURL);

const queryString = document.location.search;
//console.log("QueryString", queryString);

const params = new URLSearchParams(queryString);
//console.log("Params", params);

const id = params.get("id");
//console.log("Const ID", id);

const newUpdateProductURL = updateProductURL + id;
//console.log("NewUpdateProductURL", newUpdateProductURL);

/**
 * This function gathers the information from a form and passes it to the server as an Product.
 */
export function updateProductListener() {
  const updateProductForm = document.getElementById("updateProductTitle");
  //console.log("update Product Form :", updateProductForm);

  if (updateProductForm) {
    updateProductForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      //console.log("Form :", form);
      const formData = new FormData(form);
      //console.log("formData :", formData);
      const entryData = Object.fromEntries(formData.entries());
      //console.log("ProductToupdate :", entryData);

      // Sends to the API
      updateProduct(newUpdateProductURL, entryData);
      //console.log("Function :", updateProduct);
    });
  } else {
    //console.log("error");
  }
}

updateProductListener();
