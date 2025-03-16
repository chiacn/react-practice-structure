import type { Category } from "../types/category";
import { Contest } from "../types/contest";
import request from "./axiosInstance";

export const getCategories = async () => {
  return request<Category[]>("get", "/categories");
};

export async function getTestList() {
  return request<Contest[]>("get", "/contest");
}
