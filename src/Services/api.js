import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const getProducts = async (limit = 12, skip = 0) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products?limit=${limit}&skip=${skip}`,
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/search?q=${query}`);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/category/${category}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getAllcategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getProductsById = async (id) =>{
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}