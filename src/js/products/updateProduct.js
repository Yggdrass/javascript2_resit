//import { createAlertMessage } from "../components/createAlertMessage";

/**
 *
 * @param {string} url This is where the entryData is sent in order to be created.
 * @param {*} entryData This is where the url from create_entry_listener.js is inserted.
 * @returns a success message that the entry has been created.
 */

const isLoggedIn = localStorage.getItem("accessToken");
console.log("Users Token :", isLoggedIn);

export async function updateProduct(url, entryData) {
  /*console.log(
      "createProduct() Url :",
      url,
      "createProduct() entryData :",
      entryData
    );*/

  try {
    /*const entryData = {
        title: "Noob Noob Noob",
      };*/
    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryData),
    };

    const response = await fetch(url, postData);
    //console.log("updateProduct()) Response :", response);
    const result = await response.json();
    //console.log("updateProduct() Result :", result);
    if (isLoggedIn && response.ok) {
      alert(`Your product '${result.title}' have successfully been added!`);
    } else {
      alert("You need to be logged in to edit the title of this product!");
    }
  } catch (error) {
    //console.log(error);
  }
}

updateProduct();
//console.log("Function :", createProduct);
