import { createProfileAPIQUery } from "./BaseAPI";
import { API_URL, API_USERNAME } from "./ApiUtils";

export const getAllProfiles = createProfileAPIQUery(() => {
  return `${API_URL}profile/`;
});

export const getProfile = createProfileAPIQUery(() => {
  return `${API_URL}profile/${API_USERNAME}`;
});

//calling, pass in body, and no other arguments are needed for 'params'
//addProfile(JSON.stringify(body)).then(...);
export const add = createProfileAPIQUery(() => {
  return `${API_URL}/profile`;
}, "POST");

//calling, pass in body, and 'Id' will end up as part of 'params'
//updateProfile(JSON.stringify(body), Id);
export const updateProfile = createProfileAPIQUery(id => {
  return `${API_URL}/profile/${id}`;
}, "PUT");

export const deleteProfile = createProfileAPIQUery(id => {
  return `${API_URL}/profile/${id}`;
}, "delete");
