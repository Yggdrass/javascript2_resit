import { loginUser } from "../authentication/login.js";
import { API_LOGIN_URL } from "../api/api_base.js";

const loginURL = `${API_LOGIN_URL}`;
console.log("loginUrl :", loginURL);

/**
 * This form gathers information from a form and passes it into the function loginUser().
 */
export async function loginFormListener() {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const userData = Object.fromEntries(formData.entries());
      console.log("userToLogin :", userData);

      // Sends to the API
      loginUser(loginURL, userData);
    });
  }
}

loginFormListener();
