import type { Category } from "../types/category";
import { Contest } from "../types/contest";
import request from "./axiosInstance";

export const getCategories = async () => {
  return request<Category[]>("get", "/categories");
};

export async function getTestList() {
  return request<Contest[]>("get", "/contest");
}

// * TODO: any -> Response Type으로 변경하기
export async function postApply(contestId: number, formData: FormData) {
  return request<any>("post", `/contest/${contestId}`, {}, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
