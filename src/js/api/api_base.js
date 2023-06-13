/**
 * This file contains the URL's for the API-calls made in other JS-files.
 */

export const baseUrl = "https://dummyjson.com";

export const API_LOGIN_URL = "https://dummyjson.com/auth/login";

export const productsUrl = `${baseUrl} + products`;

export const singleProductUrl = `${baseUrl} + products/id`;

export const searchProductsUrl = `${baseUrl} + products/search?q=phone`;

export const addProductUrl = `${baseUrl} + products/add`;

export const updateProductUrl = `${baseUrl} + products/id`;

export const deleteProductUrl = `${baseUrl} + products/id`;

export const singleUserUrl = `${baseUrl} + users/id`;
