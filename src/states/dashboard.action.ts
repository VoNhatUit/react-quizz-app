import { ICategory } from "../types/dasbhoard"

export const setCategories = (data: ICategory[]) => {
  return {
    type: 'SET_CATEGORIES',
    payload: data
  }
}

export const setCategory = (payload: number) => {
  return {
    type: 'SET_CATEGORY',
    payload
  }
}

export const setAmount = (payload: number) => {
  return {
    type: 'SET_AMOUNT',
    payload
  }
}

export const setType = (payload: string) => {
  return {
    type: 'SET_TYPE',
    payload
  }
}

export const setDifficulty = (payload: string) => {
  return {
    type: 'SET_DIFFICULTY',
    payload
  }
}