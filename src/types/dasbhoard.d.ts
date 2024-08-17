type ICategory = {
  id: number;
  name: string;
}

export type IDashboardState = {
  categories: ICategory[]; // string[] or number[] or object[]
  amount: number;
  category: number;
  difficulty: string;
  type: string;
}