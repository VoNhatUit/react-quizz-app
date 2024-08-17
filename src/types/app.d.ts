export type IAppState = {
  isLoading: boolean
}

export type IQuestion = {
  "type": string;
  "difficulty": string;
  "category": string;
  "question": string;
  "correct_answer": string;
  "incorrect_answers": string[]
}