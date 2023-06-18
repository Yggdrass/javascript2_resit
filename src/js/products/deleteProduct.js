import { SINGLE_PRODUCT_URL } from "../api/api_base.js";

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

const isLoggedIn = localStorage.getItem("accessToken");
//console.log("Users Token :", isLoggedIn);

/**
 * This function simulates the deletion of the product by passing in the ID from the searchQuery in the addressbar and then it calls the API for allowing the product to be deleted.
 * @param {*} url This is the URL for the call to be able to delete the product. It is declared in the deleteProduct_listener.js and passed into this function.
 * @param {*} method This is the method for the API-call to be able to successfull. The method is declared in the deleteProduct_listener.js and passed into this function. This method should be "DELETE".
 * @returns a success message that the products has been deleted if the response of the call is successful and the user is logged in.
 * If the user is not logged in it will return a failed alert message informing the user that they need to be logged in to use this feature.
 * The user will see an alert message in the top of the screen.
 */
export async function deleteProduct(url, method) {
  /*console.log(
    "createProduct() Url :",
    url,
    "createProduct() entryData :",
    method
  );*/

  try {
    const response = await fetch(url, method);
    //console.log("deleteProduct()) Response :", response);
    const result = await response.json();
    //console.log("deleteProduct() Result :", result);
    //console.log("deleteProduct() Product Is Deleted :", result.isDeleted);
    //console.log("deleteProduct() Product Was Deleted On :", result.deletedOn);
    if (isLoggedIn && response.ok) {
      alert(
        `Your product ${result.title} have successfully been deleted: ${result.isDeleted} (true/false) on: ${result.deletedOn}!`
      );
    } else {
      alert("You need to be logged in to delete this product!");
    }
  } catch (error) {
    //console.log(error);
  }
}

deleteProduct();
//console.log("Function :", deleteProduct);
