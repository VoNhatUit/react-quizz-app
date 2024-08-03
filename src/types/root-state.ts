import { IAppState } from "./app";
import { IDashboardState } from "./dasbhoard"

export type IRootState = {
  app: IAppState;
  dashboard: IDashboardState;
}