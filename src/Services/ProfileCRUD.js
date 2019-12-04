import { createProfileAPIQuery } from "./BaseAPI";
import { API_URL, API_USERNAME } from "./ApiUtils";

export const getAllProfiles = createProfileAPIQuery(() => {
  return `${API_URL}profile/`; //for All profiles
});

export const getProfile = createProfileAPIQuery(() => {
  return `${API_URL}profile/${API_USERNAME}`; // for one particular profile
});

//calling, pass in body, and no other arguments are needed for 'params'
//addProfile(JSON.stringify(body)).then(...);
export const addProfile = createProfileAPIQuery(() => {
  return `${API_URL}profile`;
}, "POST"); //creating the profile

//calling, pass in body, and 'Id' will end up as part of 'params'
//updateProfile(JSON.stringify(body), Id);
export const updateProfile = createProfileAPIQuery(id => {
  return `${API_URL}profile/?id=${id}`;
}, "PUT"); //id is used to specify whom we are updating

export const deleteProfile = createProfileAPIQuery(id => {
  return `${API_URL}profile/?id=${id}`;
}, "delete"); //id is used to specify whom we are deleting
