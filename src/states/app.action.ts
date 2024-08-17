export const setLoading = (isLoading: boolean) => {
  return {
    type: 'APP/SET_LOADING',
    payload: isLoading
  }
}