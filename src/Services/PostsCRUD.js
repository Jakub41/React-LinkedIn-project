import { createProfileAPIQuery } from "./BaseAPI";
import { API_URL } from "./ApiUtils";

export const getAllPosts = createProfileAPIQuery(() => {
  return `${API_URL}posts/`;
});

export const getPost = createProfileAPIQuery(postId => {
  return `${API_URL}posts/${postId}`;
});

export const addPost = createProfileAPIQuery(() => {
  return `${API_URL}posts/`;
}, "POST");

export const updatePost = createProfileAPIQuery(postId => {
  return `${API_URL}posts/${postId}`;
}, "PUT");

export const deleteProfile = createProfileAPIQuery(postId => {
  return `${API_URL}posts/${postId}`;
}, "delete");
