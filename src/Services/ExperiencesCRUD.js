import { createProfileAPIQuery } from "./BaseAPI";
import { API_URL, API_USERNAME } from "./ApiUtils";

export const getUserAllExperiences = createProfileAPIQuery(() => {
  return `${API_URL}profile/${API_USERNAME}/experiences`
});

export const getUserOneExperience = createProfileAPIQuery((id) => {
  return `${API_URL}profile/${API_USERNAME}/experiences/${id}`
});

export const addUserExperience = createProfileAPIQuery(() => {
  return `${API_URL}profile/${API_USERNAME}/experiences`
}, "POST");

export const updateUserExperience = createProfileAPIQuery(id => {
  return `${API_URL}profile/${API_USERNAME}/experiences/${id}`
}, "PUT");

export const deleteUserExperience = createProfileAPIQuery(id => {
  return `${API_URL}profile/${API_USERNAME}/experiences/${id}`
}, "delete");
