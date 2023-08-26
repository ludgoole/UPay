export const useLocalStore = () => {
  const loginStore = JSON.parse(localStorage.getItem('login-store') || '{}')

  return {
    ...loginStore,
  }
}
