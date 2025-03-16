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

  const setBadge = (contests: Contest[]): Contest[] => {
    return contests.map((contest, index) => ({
      ...contest,

      // 추후 category에 따라 badge가 달라질 경우 로직 추가
      badge: {
        badgeIdx: index,
        leftDate: calculateLeftDate(contest.endDate),
        category: contest.category.name,
        industry: contest.clientInfo.industry.name,
      },
    }));
  };

  // TODO: setBadge - useCallback, 의존성 추가
  const getTestListData = useCallback(async () => {
    setIsLoading(true);
    try {
      const contests = await getTestList();
      const contestsWithBadgeSet = setBadge(contests);
      setList(contestsWithBadgeSet);
      setListForCategory(
        filterListWithCategoryId(contestsWithBadgeSet, categoryId)
      ); // category Id에 따라 필터링된 list 반환
      console.log("contests --- ", contestsWithBadgeSet);
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

  useEffect(() => {
    getTestListData();
  }, [getTestListData]);

  useEffect(() => {
    setListForCategory(filterListWithCategoryId(list, categoryId));
  }, [list, categoryId, filterListWithCategoryId]);

  return { listForCategory, goToDetail, isLoading };
}
