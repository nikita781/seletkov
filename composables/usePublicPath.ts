export const usePublicPath = () => {
  const baseURL = useRuntimeConfig().app.baseURL

  return (path: string) => {
    if (/^(https?:|mailto:|tel:|#)/.test(path)) {
      return path
    }

    const cleanBase = baseURL.replace(/\/$/, '')
    const cleanPath = path.replace(/^\//, '')

    return `${cleanBase}/${cleanPath}`
  }
}
