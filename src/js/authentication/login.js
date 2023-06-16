import { save } from "../storage/save.js";
//import { createAlertMessage } from "../components/createAlertMessage";

/**
 * This function logs the user in and sends them to their profile page.
 * @param {string} url the URL that the function calls in order for the user to be logged in.
 * @param {array} userData the information gathered from the login form.
 * @returns
 */

export async function loginUser(url, userData) {
  console.log("loginUser() Url :", url, "loginUser() userData :", userData);
  try {
    /*const userData = {
      username: "kminchelle",
      password: "0lelplR",
    };*/
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(url, postData);
    console.log("loginUser() Response :", response);
    const result = await response.json();
    console.log("loginUser() Result :", result);

    const accessToken = result.token;
    console.log("loginUser() AccessToken :", result.token);

    localStorage.setItem("accessToken", result.token);

    if (response.ok) {
      alert(`${result.username} You have successfully logged in!`);
      save("profile", result);
      location.href = `./profile.html?view=profile&name=${result.username}`;
    } else {
      alert("Error! Login failed!");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}

//loginUser();

/*fetch("https://dummyjson.com/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    username: "kminchelle",
    password: "0lelplR",
    // expiresInMins: 60, // optional
  }),
})
  .then((res) => res.json())
  .then(console.log);*/
