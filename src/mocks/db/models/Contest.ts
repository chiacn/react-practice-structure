import { getRandomInt } from "../../utils/random";
import Briefing from "./Briefing";
import Categories from "./Category";
import Companies from "./TestList";
import { TestBadge } from "./TestBadge";

export const Contests = Briefing.map((briefing, i) => ({
  id: i + 1,
  createdAt: new Date(),
  startDate: new Date(),
  endDate: new Date(new Date().setDate(new Date().getDate() + i + 3)),
  totalPrize: i === 0 ? 197000000 : getRandomInt(25, 30) * 10000,
  category: {
    name: Categories[i % Categories.length],
    id: (i % Categories.length) + 1,
  },
  clientInfo: {
    company: {
      ...Companies[i],
    },
    industry: TestBadge[Math.round(Number(i / 2))] ?? TestBadge[1],
  },
  briefing,
}));
