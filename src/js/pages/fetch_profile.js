import { load } from "../storage/load.js";
import { API_SINGLE_PROFILE_URL } from "../api/api_base.js";

const profile = load("profile");
//console.log("User Profile :", profile);

const id = profile.id;
//console.log("Profile Name :", profile.id);

const profileUrl = `${API_SINGLE_PROFILE_URL}` + id;
//console.log("fetchProfile URL:", profileUrl);

const profilePageContainer = document.getElementById("profile-container");
//console.log(profilePageContainer);

const createProductContainer = document.getElementById(
  "create-product-container"
);
//console.log(createProductContainer);

const token = localStorage.getItem("accessToken");
//console.log("AccessToken :", token);

const title = document.querySelector("title");
//console.log("Page Title :", title);

/**
 * Fetches the login information of the user and creates a profilepage at ./profile.html.
 * @param {token} Accesstoken This is where the accesstoken of the current logged in user will be put.
 * @param {profileUrl} ProfileUrl This is the URL that is needed to be called with an async function in order to get the info about the current logged in user.
 * @param {profilePageContainer} ProfileContainer this is where the profile page will be loaded into as inner.HTML.
 * @param {createProductContainer} createProductContainer this where the add product form will be loaded into as inner.HTML.
 */

export async function fetchProfile() {
  try {
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    //console.log("Get Data :", getData);

    const response = await fetch(profileUrl, getData);
    //console.log("fetchProfile() Response :", response);

    const profile = await response.json();
    //console.log("fetchProfile() profile :", profile);

    createProfilePage(profile);
    //console.log("Function :", fetchProfile);
  } catch (error) {
    //console.log(error);
  }
}

fetchProfile();
//console.log("Function :", fetchProfile);

/**
 * Creates a profilepage with information gathered from the API-call.
 * @param {parameter} profile The information from the API-call in the function it is placed.
 */

export function createProfilePage(profile) {
  title.innerHTML += `EC | ${profile.username}s profile page`;

  profilePageContainer.innerHTML += `


  <!-- Page Header -->
  <div class="d-flex-column text-center pb-4">
    <h1 class="homePageTitle py-2">${profile.username}'s profile page</h1>
  </div>
  
  <div class="d-flex-column container profileCard mx-auto mb-5">
  <div class="px-4 py-3 mx-auto">
    <div class="row pb-3 profileAttributeContainer justify-content-md-center">
      <!-- Profile Image -->
      <div class="col-4">
        <img
          src="${profile.image}"
          alt="Your Avatar"
          class="img-thumbnail"
        />
      </div>

      <!-- Profile Name, Email & Tokens -->
      <div
        class="profileAttributes col-4 d-flex-column align-items-center justify-content-md-center"
      >
        <div class="d-flex pb-2" >
          <h3 class="profileAttributeTitle">Name: </h3>
          <p class="profileAttribute pl-3"> ${profile.username}</p>
        </div>
        <div class="d-flex pb-2" >
          <h3 class="profileAttributeTitle">Email: </h3>
          <p class="profileAttribute pl-3"> ${profile.email}</p>
        </div>
        <div class="d-flex pb-2" >
          <h3 class="profileAttributeTitle">Name: </h3>
          <p class="profileAttribute pl-3"> ${profile.firstName} ${profile.lastName}</p>
        </div>
        <div class="d-flex pb-2" >
          <h3 class="profileAttributeTitle">Gender: </h3>
          <p class="profileAttribute pl-3"> ${profile.gender}</p>
        </div>
      </div>
    </div>

    <div class="row pb-3">
      <!-- Profile Description -->
      <div class="profileDescription pt-3 mx-auto">
        <h5 class="profileDescriptionTitle">Description</h5>
        <p class="profileDescriptionText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          porttitor ullamcorper tempus. Vestibulum volutpat gravida justo,
          non hendrerit ligula feugiat nec. Aenean tortor turpis, tincidunt
          vitae orci ac, vehicula euismod nisi. Proin sagittis, est in
          viverra rutrum, orci sapien vulputate magna, quis tincidunt dui
          lacus sed eros. Morbi vitae metus ac diam tristique dignissim.
        </p>
      </div>
    </div>

    

`;
}
