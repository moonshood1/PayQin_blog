export const API_URL = process.env.API_PLATFORM_URL;

export const ARTICLES_API = API_URL + "articles";
export const CATEGORY_API = API_URL + "categories";
export const USER_API = API_URL + "users";

export const LOGIN_API = API_URL + "login_check";

export const OWN_API = process.env.OWN_API_URL;

export const GET_RANDOM_THREE = OWN_API + "get_random_three";
export const GET_LAST_THREE = OWN_API + "get_last_three";
export const GET_LAST_ONE = OWN_API + "get_last_one";
export const GET_THE_NEXT = OWN_API + "get_the_next";
export const GET_RELATED_TWO = OWN_API + "get_related_two";
export const GET_AFTER_MAIN = OWN_API + "get_main_next_one_after";
export const GET_PREVIOUS_SIX = OWN_API + "get_previous_six";
export const GET_ALL_CATEGORIES = OWN_API + "get_all_categories";
export const GET_ALL_ARTICLES = OWN_API + "get_all_articles";
