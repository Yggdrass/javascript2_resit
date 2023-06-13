//import { isLoggedIn } from "../authentication/state.js";
import { load } from "../storage/load.js";

export const isLoggedIn = () => Boolean(load("accessToken"));

/**
 * This form gathers information from a form and passes it into the function loginUser().
 */

export function redirectListener() {
  const logo = document.getElementById("redirect_logo");

  try {
    logo.addEventListener("onClick", (event) => {
      event.preventDefault();

      // Sends to the API

      console.log(event);
    });

    if (isLoggedIn) {
      console.log(isLoggedIn);
      alert("You don't need to log in, go home instead!");
      location.href = `./home.html`;
      return false;
    } else {
      alert("Error! Redirect failed!");
    }
    return false;
  } catch (error) {
    console.log(error);
  }
}

redirectListener();
