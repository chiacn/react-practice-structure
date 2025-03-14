import type { Category } from "../types/category";
import type { Contest } from "../types/contest";
import request from "./axiosInstance";

export async function getCategories() {
  return request<Category[]>("get", "/categories");
}

export async function getContests() {
  return request<Contest[]>("get", "/contest");
}
