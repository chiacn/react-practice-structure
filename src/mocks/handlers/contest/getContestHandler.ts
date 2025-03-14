import { delay, http, HttpResponse } from "msw";
import { Contests } from "../../db/models/Contest";
import createStunningError from "../../db/models/Error";
import { getRandomBoolean } from "../../utils/random";

export const getContestListHandler = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/contest`,
  async () => {
    await delay(300);

    if (getRandomBoolean()) {
      return HttpResponse.json(createStunningError(), { status: 500 });
    }

    return HttpResponse.json(Contests, { status: 200 });
  }
);

export const getContestDetailHandler = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/contest/:contestID`,
  async ({ params }) => {
    await delay(300);

    const { contestID } = params;

    if (!contestID) {
      return HttpResponse.json(
        createStunningError("유효하지 않은 요청입니다"),
        { status: 400 }
      );
    }

    if (getRandomBoolean()) {
      return HttpResponse.json(
        createStunningError("알 수 없는 에러가 발생했습니다"),
        { status: 500 }
      );
    }

    const existingContest = Contests[Number(contestID) - 1];

    if (!existingContest) {
      return HttpResponse.json(
        createStunningError("존재하지 않는 콘테스트 입니다"),
        { status: 404 }
      );
    }

    return HttpResponse.json(Contests[Number(contestID) - 1], {
      status: 200,
    });
  }
);
