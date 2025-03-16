import { useEffect, useState } from "react";
import { getCategories } from "../apis/fetchData";
import type { Category } from "../types/category";
import { useSearchParams } from "react-router-dom";

export default function useCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    setSelectedCategory(categoryParam ? Number(categoryParam) : 0);
    getCategoriesData();
  }, [searchParams]);

  const getCategoriesData = async () => {
    setIsLoading(true);
    try {
      const categoryList = await getCategories();
      setCategories(categoryList);
    } catch (error) {
      console.error("Error fetching categories:", error);
      // TODO: toast or modal
    } finally {
      setIsLoading(false);
    }
  };

  const selectCategory = (id: number) => {
    setSelectedCategory(id);
    setSearchParams((prev) => {
      const newSearchParams = new URLSearchParams(prev);
      if (id === 0) {
        newSearchParams.delete("category");
      } else {
        newSearchParams.set("category", String(id));
      }
      return newSearchParams;
    });
  };

  return { categories, selectedCategory, selectCategory, isLoading };
}
