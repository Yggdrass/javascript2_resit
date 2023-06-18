import { API_DELETE_PRODUCT_URL } from "../api/api_base.js";
import { deleteProduct } from "../products/deleteProduct.js";

export const isLoggedIn = localStorage.getItem("accessToken");
//console.log(isLoggedIn);

const queryString = document.location.search;
//console.log("QueryString", queryString);

const params = new URLSearchParams(queryString);
//console.log("Params", params);

const id = params.get("id");
//console.log("Const ID", id);

const deleteProductURL = `${API_DELETE_PRODUCT_URL}`;
//console.log("deleteProductURL", deleteProductURL);

const newDeleteProductURL = deleteProductURL + id;
//console.log("NewDeleteProductURL", newDeleteProductURL);

const deleteButton = document.querySelector("#deleteProduct-button");
//console.log("deleteButton :", deleteButton);

/**
 * This function listens for a click event and executes the function logout().
 */

/*deleteButton.addEventListener("click", (e) => {
  console.log("Click");
});*/

/**
 * This function listens for click event in order to execute the deleteProduct() function.
 */
export function deleteProductListener() {
  //const deleteButton = document.querySelector(".fa-trash-can");
  //console.log("Delete Product Form :", deleteButton);

  try {
    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();
      //console.log(e);
      const deleteOptions = { method: "DELETE" };

      // Sends to the API
      deleteProduct(newDeleteProductURL, deleteOptions);
      //console.log("Function :", deleteProduct);
      //alert("Click");
    });
  } catch (error) {
    //console.log(error);
  }
}

deleteProductListener();
