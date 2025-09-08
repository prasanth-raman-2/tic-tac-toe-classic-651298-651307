export const getURL = () => {
  let url = process.env.REACT_APP_SITE_URL || 'http://localhost:3000'
  // Make sure we include `https://` when not localhost.
  url = url.includes('localhost') ? url : `https://${url}`
  // Make sure the URL ends with a trailing /
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
  return url
}
