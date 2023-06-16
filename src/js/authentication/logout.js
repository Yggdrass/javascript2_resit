/**
 * Removes the user from their localStorage so that they can't access the website. Also it sends them to the index.html page.
 */

export function logout() {
  try {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("profile");
    location.href = "./index.html";
    alert("You have successfully logged out!");
  } catch (error) {
    alert("Error! Logout failed!");
    console.log(error);
  }
}
