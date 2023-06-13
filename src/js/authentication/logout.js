/**
 * Removes the user from their localStorage so that they can't access the website. Also it sends them to the index.html page.
 */

export function logout() {
  try {
    localStorage.remove("accessToken");
    if (logout.ok) {
      location.href = "./index.html";
    }
  } catch (error) {
    console.log(error);
  }
}
