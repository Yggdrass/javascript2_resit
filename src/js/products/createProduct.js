//import { createAlertMessage } from "../components/createAlertMessage";

/**
 * This function simulates the adding of a product by passing in the input-value from the create form on the ./profile page, the ID from the searchQuery in the addressbar and then it calls the API for allowing it to add the product.
 * @param {string} url This is where the entryData is sent in order for the product to be created.
 * @param {*} entryData This is where the entryData is sent in order to create product with a title.
 * @returns a success message that the products has been created if the response of the call is successful and the user is logged in.
 * If the user is not logged in it will return a failed alert message informing the user that they need to be logged in to use this feature.
 * The user will see an alert message in the top of the screen.
 */

const isLoggedIn = localStorage.getItem("accessToken");
//console.log("Users Token :", isLoggedIn);

export async function createProduct(url, entryData) {
  /*console.log(
    "createProduct() Url :",
    url,
    "createProduct() entryData :",
    entryData
  );*/

  try {
    /*
    // Hardcoded EntryData to use incase the API-call doesn't want to put the Title value from the Create Form Value into this function. Used as a backup in testing cases.
    const entryData = {
      title: "Noob Noob Noob",
    };*/
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryData),
    };

    const response = await fetch(url, postData);
    //console.log("createProduct()) Response :", response);
    const result = await response.json();
    //console.log("createProduct() Result :", result);
    if (isLoggedIn && response.ok) {
      alert(`Your product '${result.title}' have successfully been added!`);
    } else {
      alert("You need to be logged in to add a product!");
    }
  } catch (error) {
    //console.log(error);
  }
}

createProduct();
//console.log("Function :", createProduct);
