import { SINGLE_PRODUCT_URL } from "";

/**
 *
 * @param {string} url This is where the entryData is sent in order to be created.
 * @param {*} entryData This is where the url from create_entry_listener.js is inserted.
 * @returns a success message that the entry has been created.
 */

export async function createProduct(url, entryData) {
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryData),
    };

    const response = await fetch(url, postData);
    console.log("createProduct()) Response :", response);
    const result = await response.json();
    console.log("createProduct() Result :", result);
    if (response.ok) {
      alert(`Your product '${result.title}' have successfully been added!`);
    } else {
      alert("Error! Product failed to add!");
    }
  } catch (error) {
    console.log(error);
  }
}

createProduct();
//console.log("Function :", createProduct);
