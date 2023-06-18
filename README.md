# javascript2_resit


![my image](./src/assets/project_image.png)



## How to use the website's functionalities:

* Login with any users username and password from this link: https://dummyjson.com/users.
  But for quick and ease of time here is user ID: 1's credentials so you can quickly login:
  username: atuny0
  password: 9uQFF1Lh
* You will after a successful login get a message that you have logged in successfully and then taken to that users profile page.
* On this profile page you can scroll down and enter a title of your choosing to simulate the adding of a product to be sold.
* On the products page you will see a list of all products. Here you can search for categories of products and the list will update to show the catories that match your search.
  List of categories in the API can be found here: 
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
  
* On each product you will see a button you can click to get sent to a details page for that specific product. 
* On this detaisl page you can choose to simulate deleting the product or simulate the updating of a products title.
* If you are logged in and try to click the company logo you will be redirected to the home page and not the index page where the login form is located.
* If you click the logout button in the top of the page you will be logged out and sent to the index page. You will be able to 
  click try to add a product, update its title or delete but it will not work and a window alert message will pop up letting you know that you need to log in in order to use them.

## Links:

Trello: https://trello.com/invite/b/LRRriuq4/ATTI4ba0cbe4dd3a1d2f4835acdc69afee831C6AAA3D/javascript2resit

## Required features

The following user stories are required for a passing submission:


- User can login with one of the user email and password combinations returned from this endpoint. The first user can also be found here - click Show ouput. The login endpoint is demonstrated here.
- User can view a list of products
- User can view a single product fetched by id
- User can search for a product
- User can create a post content item
- User can update a post content item
- User can delete a post content item
- Only logged in users can use the create, update and delete functionality
- If a user is logged in and tries to access the login page, they should be redirected to the home page
* User can login with one of the user email and password combinations returned from this endpoint (https://dummyjson.com/users).
* User can view a list of products
* User can view a single product fetched by id
* User can search for a product
* User can create a post content item
* User can update a post content item
* User can delete a post content item
* Only logged in users can use the create, update and delete functionality
* If a user is logged in and tries to access the login page, they should be redirected to the home page


The example code snippets use the then/catch syntax but consider using async/await for better readability.

Note: There is no registration functionality.


## Process:

* I started by creating a board on Trello (link is op in the top description), so I could sort out every aspect of work needed to be done on the project.
* The first thing I did was to create a simple but nice design for colors, logo etc for the website to look nice and easy for the user to see what is on the pages. 
  Since this was a one week resit and the focus of this on the JS, the design didn't matter too much but it had to be good enough so the user can use the website easy and quickly.
* Then I installed NPM and Bootstrap/Sass and then created the pages and implemented the design so it was easier for me to see what worked a not with the JS functions. 
* After that I started on the functions one at a time. First login and logout. Then the add product function. After this I created the searchable product list so I could get the info on a single product so I then could send     that info to a details page. I chose to only add the delete and update title functionality here, since it was easier to securely add those function to get the correct info from theproduct altered. If I had more time I would   try to copy those functionalities over to each product in the products list. 
* The last thing I did was go over the semantics of HTML, CSS and JS so I could make sure it is neat, easy to understand and read for anyone.
