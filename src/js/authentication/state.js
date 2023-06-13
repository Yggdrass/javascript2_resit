import { load } from "../storage/load.js";

export const isLoggedIn = () => Boolean(load("accessToken"));

export const profile = () => load("profile");
