import { createProfileAPIQUery } from "./BaseAPI";
import { API_URL } from "./ApiUtils";

export const getAllProfiles = createProfileAPIQUery(() => {
  return `${API_URL}/profile/`;
});

export const getProfile = createProfileAPIQUery(() => {
  return `${API_URL}/profile/me`;
});



// export const addComment = createProfileAPIQUery(() => {
//   return `${API_URL}/comments`;
// }, "POST");

// export const updateComment = createProfileAPIQUery(id => {
//   return `${API_URL}/comments/${id}`;
// }, "PUT");

// export const deleteComment = createProfileAPIQUery(id => {
//   return `${API_URL}/comments/${id}`;
// }, "delete");
