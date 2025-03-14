import { http, HttpResponse } from "msw";
import { getRandomBoolean } from "../../utils/random";
import {
  getTimestampFromSessionStorage,
  removTimestampFromSessionStorage,
} from "../../utils/timeStamp";
import createStunningError from "../../db/models/Error";

export const statusCheckHandler = http.get(
  `${import.meta.env.VITE_API_BASE_URL}/contest/:id/status`,

  () => {
    const lastCheckedTime = getTimestampFromSessionStorage();

    // 폼 작성없이 부른경우
    if (lastCheckedTime === null) {
      return HttpResponse.json(
        createStunningError("처리중인 트렌젝션이 없습니다"),
        { status: 400 }
      );
    }

    const currentTime = new Date().getTime();
    const previousTime = JSON.parse(lastCheckedTime);

    if (
      currentTime - previousTime <
      Number(import.meta.env.VITE_TRANSACTION_TIME ?? 5000)
    ) {
      return HttpResponse.json({ status: "pending" }, { status: 200 });
    }

    removTimestampFromSessionStorage();

    const isAlwaysFail = import.meta.env.VITE_TRANSACTION_ALWAYS_FAIL === "ON";

    if (isAlwaysFail || getRandomBoolean()) {
      return HttpResponse.json({ status: "fail" }, { status: 200 });
    }
    return HttpResponse.json({ status: "success" }, { status: 200 });
  }
);
