export const useLocalStore = () => {
  const loginStore = JSON.parse(sessionStorage.getItem('login-store') || '{}')

  return {
    ...loginStore,
  }
}
