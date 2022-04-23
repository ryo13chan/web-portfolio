const get = (url: string) =>
  useFetch(url, {
    method: 'GET',
    baseURL: 'https://api.github.com/',
  })
export default { get }
