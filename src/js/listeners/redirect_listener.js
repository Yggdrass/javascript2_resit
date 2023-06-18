/**
 * This listens for a click on the logo image in the Navbar and redirects the user to the Home.html if they are already logged in.
 * If not they will go to index.html which is where the logo originally sends them. The user will get a message in each case that let's them know of the redirect or if they need to log in.
 */

export const isLoggedIn = localStorage.getItem("accessToken");
//console.log(isLoggedIn);

export function redirectListener() {
  const logo = document.getElementById("redirect_logo");

  if (isLoggedIn) {
    logo.addEventListener("click", (event) => {
      event.preventDefault();
      //console.log(event);

      alert("You don't need to log in, go home instead!");
      window.location.replace("./home.html");
    });
  } else {
    alert("You need to log in, please do that here!");
    //console.log("Error : User is not logged in");
  }
}

redirectListener();
