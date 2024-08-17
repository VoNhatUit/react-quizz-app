import { IAppState } from "./app";
import { IDashboardState } from "./dasbhoard"
import { IScoreState } from "./score";

export type IRootState = {
  app: IAppState;
  dashboard: IDashboardState;
  score: IScoreState;
}