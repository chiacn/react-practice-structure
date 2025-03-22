import styled from "@emotion/styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import ApplyForm from "../components/ApplyForm";
import { postApply } from "../apis/fetchData";

const ApplyFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  height: 90vh;
  min-width: 320px;
`;

interface ApplyFormValues {
  email: string;
  phone: string;
  image: FileList;
}

const ContestApplyForm = () => {
  // TODO: HOOK으로 빼기
  const navigate = useNavigate();
  const { id } = useParams();

  // react-hook-form 훅 설정
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyFormValues>({ mode: "onChange" });

  // 폼 제출 시 호출될 콜백
  const onSubmit: SubmitHandler<ApplyFormValues> = async (data) => {
    try {
      console.log("data", data);

      const formData = new FormData();
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("image", data.image[0]);

      await postApply(Number(id), formData);
      navigate(`/contest/${id}/apply/pending`);
    } catch (error) {
      console.error(error);
      alert("신청에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const createFakeFormData = (): FormData => {
    const formData = new FormData();

    // 임의의 이메일과 전화번호
    formData.append("email", "test@example.com");
    formData.append("phone", "01012345678");

    // 가짜 이미지 파일 생성: Blob을 사용하여 임의의 데이터와 타입 설정
    const fakeImageContent = new Blob(["fake image content"], {
      type: "image/png",
    });
    const fakeImageFile = new File([fakeImageContent], "test.png", {
      type: "image/png",
    });
    formData.append("image", fakeImageFile);

    return formData;
  };

  const handleTestSubmit = async () => {
    console.log("TestButton Clicked");
    try {
      const formData = createFakeFormData();
      await postApply(Number(id), formData);
      navigate(`/contest/${id}/apply/pending`);
    } catch (error) {
      console.error(error);
      alert("테스트 요청에 실패했습니다.");
    }
  };

  return (
    <ApplyFormContainer>
      {/* handleSubmit(onSubmit)를 form에 연결 */}
      <ApplyForm onSubmit={handleSubmit(onSubmit)}>
        <ApplyForm.Title>ApplyForm</ApplyForm.Title>

        {/* 이메일 입력 필드 */}
        <ApplyForm.Input
          id="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          register={register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "이메일 형식이 올바르지 않습니다.",
            },
          })}
          errorMessage={errors.email?.message}
        />

        {/* 휴대전화번호 입력 필드 */}
        <ApplyForm.Input
          id="phone"
          label="휴대전화번호"
          placeholder="휴대전화번호를 입력해주세요"
          register={register("phone", {
            required: "휴대전화번호를 입력해주세요.",
            pattern: {
              value: /^01[0-9]{8,9}$/,
              message:
                "휴대전화번호 형식이 올바르지 않습니다. (예: 01012345678)",
            },
          })}
          errorMessage={errors.phone?.message}
        />

        {/* 첨부파일 (이미지 업로드) */}
        <ApplyForm.FileUpload
          id="image"
          register={register("image", {
            required: "이미지 파일을 업로드해주세요.",
            validate: {
              isImage: (fileList: FileList) => {
                if (!fileList || fileList.length === 0) {
                  return "파일이 업로드되지 않았습니다.";
                }
                const file = fileList[0];
                return file.type.startsWith("image/")
                  ? true
                  : "이미지 형식 파일만 업로드 가능합니다.";
              },
            },
          })}
          errorMessage={errors.image?.message}
        />

        {/* 제출 버튼 */}
        <ApplyForm.SubmitButton>참여 완료</ApplyForm.SubmitButton>
        <button onClick={handleTestSubmit}>TestButton</button>
      </ApplyForm>
    </ApplyFormContainer>
  );
};

export default ContestApplyForm;
