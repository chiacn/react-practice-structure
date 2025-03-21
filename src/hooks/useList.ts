import { useCallback, useEffect, useState } from "react";
import { getTestList } from "../apis/fetchData";
import { useNavigate } from "react-router-dom";
import type { Contest } from "../types/contest";

export default function useContestList(categoryId: number) {
  const [list, setList] = useState<Contest[]>([]);
  const [listForCategory, setListForCategory] = useState<Contest[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const filterListWithCategoryId = useCallback(
    (contests: Contest[], categoryId: number) => {
      return categoryId
        ? contests.filter((c) => c.category.id === categoryId)
        : contests;
    },
    []
  );

  // const setBadge = (contests: Contest[]): Contest[] => {
  //   return contests.map((contest, index) => ({
  //     ...contest,

  //     // 추후 category에 따라 badge가 달라질 경우 로직 추가
  //     badge: {
  //       badgeIdx: index,
  //       leftDate: calculateLeftDate(contest.endDate),
  //       category: contest.category.name,
  //       industry: contest.clientInfo.industry.name,
  //     },
  //   }));
  // };

  const getTestListData = useCallback(async () => {
    setIsLoading(true);
    try {
      const contests = await getTestList();
      setList(contests);
      setListForCategory(filterListWithCategoryId(contests, categoryId)); // category Id에 따라 필터링된 list 반환
      console.log("contests --- ", contests);
    } catch (error) {
      console.error("Error fetching contests:", error);
    } finally {
      setIsLoading(false);
    }
  }, [filterListWithCategoryId, categoryId]);

  const goToDetail = (contestId: number) => {
    navigate(`/contest/${contestId}`);
  };

  // Util
  function calculateLeftDate(endDate: string): number {
    const endDateTime = new Date(endDate).getTime();
    const currentDateTime = new Date().getTime();
    return Math.floor((endDateTime - currentDateTime) / (1000 * 60 * 60 * 24));
  }

  const BADGE_COLOR = {
    WARN: "#F21724",
    AVAILABLE: "#2656F6",
    DEFAULT: "#6F7785",
  };

  const BADGE_TITLE = {
    WARN: "Badge A",
    AVAILABLE: "Badge B",
    DEFAULT: "Badge C",
  };

  const getBadgeLevel = (
    leftDate: number | undefined
  ): keyof typeof BADGE_COLOR => {
    if (leftDate === undefined) return "DEFAULT";
    if (leftDate >= 10) return "DEFAULT";
    if (leftDate >= 5) return "AVAILABLE";
    return "WARN";
  };

  useEffect(() => {
    getTestListData();
  }, [getTestListData]);

  useEffect(() => {
    setListForCategory(filterListWithCategoryId(list, categoryId));
  }, [list, categoryId, filterListWithCategoryId]);

  return {
    listForCategory,
    goToDetail,
    isLoading,
    calculateLeftDate,
    BADGE_COLOR,
    BADGE_TITLE,
    getBadgeLevel,
  };
}
