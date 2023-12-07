import Cookies from 'js-cookie'

import { TOKEN_KEY } from '@/config'

export function getAuthorization() {
  const searchParams = new URLSearchParams(location.search)
  const url_token = searchParams.get('access_token')
  const access_token = Cookies.get(TOKEN_KEY)
  if (url_token) {
    Cookies.set(TOKEN_KEY, url_token)
    sessionStorage.clear()
    localStorage.clear()
    return new Promise(resolve => {
      resolve(true)
    })
  }
  if (!access_token) {
    sessionStorage.clear()
    localStorage.clear()
    window.location.href = `/login`
    // return new Promise(reject => {
    //   reject(false)
    // })
  }
  return new Promise(resolve => {
    resolve(true)
  })
}
