import { delay, http, HttpResponse } from "msw";
import { getRandomBoolean } from "../../utils/random";
import createStunningError from "../../db/models/Error";
import { Contests } from "../../db/models/Contest";
import { saveTimestampToSessionStorage } from "../../utils/timeStamp";

// 이메일 정규 표현식
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 전화번호 정규 표현식 (예: 01012345678 형식)
const phoneRegex = /^010\d{4}\d{4}$/;

// 이미지 유효성 검사 (간단하게 확장자만 체크)
const validImageExtensions = ["jpg", "jpeg", "png", "gif"];

export const applyContestHandler = http.post(
  `${import.meta.env.VITE_API_BASE_URL}/contest/:id`,
  async ({ request }) => {
    await delay(300);

    const formData = await request.formData();

    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const file = formData.get("image") as File;

    // 이메일 유효성 검사
    if (!email || !emailRegex.test(email)) {
      return HttpResponse.json(
        createStunningError("유효하지 않은 이메일 형식입니다."),
        { status: 400 }
      );
    }

    // 전화번호 유효성 검사
    if (!phone || !phoneRegex.test(phone)) {
      return HttpResponse.json(
        createStunningError("유효하지 않은 전화번호 형식입니다."),
        { status: 400 }
      );
    }

    // 이미지 유효성 검사
    if (
      !file ||
      !validImageExtensions.some((ext) => file.name.toLowerCase().endsWith(ext))
    ) {
      return HttpResponse.json(
        createStunningError(
          "유효하지 않은 이미지 형식입니다. 허용된 형식: jpg, jpeg, png, gif."
        ),
        { status: 400 }
      );
    }

    // 임의로 500 오류를 반환할지 결정
    if (getRandomBoolean()) {
      return HttpResponse.json(createStunningError(), { status: 500 });
    }

    // 성공 응답
    saveTimestampToSessionStorage();
    return HttpResponse.json(Contests, { status: 200 });
  }
);
