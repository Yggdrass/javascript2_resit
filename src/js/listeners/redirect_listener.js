/**
 * This listens for a click on the logo image in the Navbar and redirects the user to the Home.html if they are already logged in. If not they will go to index.html which is where the logo originally sends them.
 */

export const isLoggedIn = localStorage.getItem("accessToken");
//console.log(isLoggedIn);

export function redirectListener() {
  const logo = document.getElementById("redirect_logo");

  if (isLoggedIn) {
    logo.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(event);

      alert("You don't need to log in, go home instead!");
      window.location.replace("./home.html");
    });
  } else {
    console.log("User is not logged in");
  }
}

redirectListener();
