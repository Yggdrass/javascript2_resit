/**
 * This function simulates the update of the product's title by passing in the input-value from the update modal on the ./details page, the ID from the searchQuery in the addressbar and then it calls the API for allowing it to update the title.
 * @param {string} url This is where the url from updateProduct_listener.js is inserted.
 * @param {*} entryData This is where the entryData is sent in order to update the products title.
 * @returns a success message that the products title has been updated if the response of the call is successful and the user is logged in.
 * If the user is not logged in it will return a failed alert message informing the user that they need to be logged in to use this feature.
 * The user will see an alert message in the top of the screen.
 */

const isLoggedIn = localStorage.getItem("accessToken");
//console.log("Users Token :", isLoggedIn);

export async function updateProduct(url, entryData) {
  /*console.log(
      "createProduct() Url :",
      url,
      "createProduct() entryData :",
      entryData
    );*/

  try {
    /*
    // Hardcoded EntryData to use incase the API-call doesn't want to put the Update Title Form Value into this function. Used as a backup in testing cases.
    const entryData = {
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
      alert(`Your product '${result.title}' have successfully been updated!`);
    } else {
      alert("You need to be logged in to edit the title of this product!");
    }
  } catch (error) {
    //console.log(error);
  }
}

updateProduct();
//console.log("Function :", createProduct);
