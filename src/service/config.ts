const devBaseURL = "http://101.132.99.131:8000/client";
const proBaseURL = "http://101.132.99.131:8000/client";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 8000;
