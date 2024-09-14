import { ICategory } from "../types/dasbhoard"
import { IRootState } from "../types/root-state"
import { setLoading } from "./app.action"

export const setCategories = (data: ICategory[]) => {
  return {
    type: 'DASHBOARD/SET_CATEGORIES',
    payload: data
  }
}

export const fetchCategories: any = () => {
  return async (dispatch: any) => {
    dispatch(setLoading(true));

    const res = await fetch('https://opentdb.com/api_category.php');
    const data = await res.json();

    dispatch(setLoading(false))
    dispatch(setCategories(data.trivia_categories))
  }
}

export const fetchQuestions: any = () => {
  return async (dispatch: any, getState: () => IRootState) => {
    const dashboard = getState().dashboard;
    const questions = getState().dashboard.questions;

    if(!dashboard.difficulty || !dashboard.type) return;
    if(questions.length > 0) return null;
    dispatch(setLoading(true))
    const res = await fetch(`https://opentdb.com/api.php?amount=${dashboard.amount}&category=${dashboard.category}&difficulty=${dashboard.difficulty}&type=${dashboard.type}`);
    const data = await res.json();
    dispatch(setQuestions(data.results))
    dispatch(setLoading(false))
  }
}


export const setCategory = (payload: number) => {
  return {
    type: 'DASHBOARD/SET_CATEGORY',
    payload
  }
}

export const setAmount = (payload: number) => {
  return {
    type: 'DASHBOARD/SET_AMOUNT',
    payload
  }
}

export const setType = (payload: string) => {
  return {
    type: 'DASHBOARD/SET_TYPE',
    payload
  }
}

export const setDifficulty = (payload: string) => {
  return {
    type: 'DASHBOARD/SET_DIFFICULTY',
    payload
  }
}

export const setQuestions = (data: any) => {
  return {
    type: 'DASHBOARD/SET_QUESTIONS',
    payload: data
  }
}