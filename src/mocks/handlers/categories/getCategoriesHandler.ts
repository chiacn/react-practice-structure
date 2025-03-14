import { delay, http, HttpResponse } from "msw";
import Categories from "../../db/models/Category";
import { getRandomBoolean } from "../../utils/random";
import createError from "../../db/models/Error";

export const getCategoriesHandler = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/categories`,
  async () => {
    await delay(300);

    if (getRandomBoolean()) {
      return HttpResponse.json(createError("알 수 없는 에러가 발생했습니다"), {
        status: 500,
      });
    }

    return HttpResponse.json(
      Categories.map((category, i) => ({ id: i + 1, category })),
      { status: 200 }
    );
  }
);
