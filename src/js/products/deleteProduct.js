import { SINGLE_PRODUCT_URL } from "../api/api_base.js";

const queryString = document.location.search;
console.log("QueryString", queryString);

const params = new URLSearchParams(queryString);
console.log("Params", params);

const id = params.get("id");
console.log("Const ID", id);

const singleProductUrl = `${SINGLE_PRODUCT_URL}`;
console.log("singleProductUrl :", singleProductUrl);

const newSingleProductUrl = "https://dummyjson.com/products/" + id;
console.log("newSingleProductUrl :", newSingleProductUrl);

export async function deleteProduct(url, method) {
  console.log(
    "createProduct() Url :",
    url,
    "createProduct() entryData :",
    method
  );

  try {
    /*const entryData = {
        title: "Noob Noob Noob",
      };*/

    const response = await fetch(url, method);
    console.log("deleteProduct()) Response :", response);
    const result = await response.json();
    console.log("deleteProduct() Result :", result);
    console.log("deleteProduct() Product Is Deleted :", result.isDeleted);
    console.log("deleteProduct() Product Was Deleted On :", result.deletedOn);
    if (response.ok) {
      alert(
        `Your product ${result.title} have successfully been deleted: ${result.isDeleted} (true/false) on: ${result.deletedOn}!`
      );
    } else {
      alert("Error! Product failed to be deleted!");
    }
  } catch (error) {
    //console.log(error);
  }
}

deleteProduct();
//console.log("Function :", deleteProduct);
