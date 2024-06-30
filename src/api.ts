import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const ACCESS_KEY = "Wl4qybTYTQPq5gU9K04QFcw-kXdFeKEPT7O7-67e0y0";

export interface ImageUrls {
  small: string;
  regular: string;
}

export interface ImageData {
  id: string;
  alt_description: string;
  urls: ImageUrls;
}

interface FetchImagesResponse {
  results: ImageData[];
}

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>("/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  return response.data;
};
