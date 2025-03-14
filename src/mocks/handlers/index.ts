import { getCategoriesHandler } from "./categories/getCategoriesHandler";
import { applyContestHandler } from "./contest/applyContestHandler";
import {
  getContestListHandler,
  getContestDetailHandler,
} from "./contest/getContestHandler";
import { statusCheckHandler } from "./statusCheck.ts/statusCheckHandler";

export const handlers = [
  getContestListHandler,
  getCategoriesHandler,
  statusCheckHandler,
  getContestDetailHandler,
  applyContestHandler,
];
