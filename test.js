fetch("https://dummyjson.com/test", {
  method: "GET" /* or POST/PUT/PATCH/DELETE */,
})
  .then((res) => res.json())
  .then((data) => console.log(data));
/*
{
  status: 'ok',
  method: 'GET', // or POST/PUT/PATCH/DELETE
}
*/
