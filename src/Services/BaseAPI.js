import { API_USERNAME, API_PASSWORD } from "./ApiUtils";

export const createProfileAPIQUery = (urlGenerator, method = "GET") => async (
  body,
  ...params
) => {
  try {
    const url = urlGenerator(...params);
    const token = btoa(API_USERNAME + ":" + API_PASSWORD);
    const credentials = {
      method: method,
      body: body,
      headers: new Headers({
        Authorization: "Basic " + token,
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
    const response = await fetch(url, credentials);
    if (!response.ok) throw new Error();
    const json = await response.json();
    return {
      success: true,
      ...json
    };
  } catch {
    return {
      success: false,
      result: [],
      message:
        "There is an issue to get data from server. Please try again later."
    };
  }
};
