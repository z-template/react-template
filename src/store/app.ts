import Cookies from 'js-cookie'
import { isEmpty } from 'lodash-es'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { TOKEN_KEY } from '@/config'
import { getUserInfo, getUserMenu, login, logout } from '@/services/user'

interface TabRoute {
  children?: any[]
  key: string
  label: string
  search?: string
  state?: any
}
interface AppState {
  theme: 'dark' | 'light'
  userInfo: any
  authMenu: any
  tabRoutes: TabRoute[]
  permissions: string[]
  roles: string[]
  setTheme: (val: 'dark' | 'light') => void
  setTabRoutes: (val: TabRoute[]) => void
  getUserInfo: () => Promise<any>
  getAuthMenu: () => void
  userLogin: (data: any) => Promise<any>
  userLogout: () => Promise<any>
}

const useAppStore = create<AppState>()(
  devtools((set, get) => ({
    theme: 'light',
    tabRoutes: [],
    authMenu: [],
    permissions: [],
    roles: [],
    userInfo: {},
    setTheme: (val: 'dark' | 'light') => {
      set(() => ({ theme: val }))
    },
    setTabRoutes: (val: TabRoute[]) => {
      set(() => ({ tabRoutes: val }))
    },
    userLogin: async (data: any) => {
      return new Promise((resolve, reject) => {
        login(data)
          .then(res => {
            if (res.code === 200) {
              Cookies.set(TOKEN_KEY, res.token)
              setTimeout(() => {
                resolve(true)
              }, 200)
            } else {
              reject()
            }
          })
          .catch(e => {
            reject(e)
          })
      })
    },
    getUserInfo: async () => {
      if (isEmpty(get().userInfo)) {
        const res = await getUserInfo()
        set(() => ({ userInfo: res.user, permissions: res.permissions, roles: res.roles }))
      }
    },
    getAuthMenu: async () => {
      if (isEmpty(get().authMenu)) {
        const resMenu = await getUserMenu()
        set(() => ({ authMenu: resMenu.data }))
      }
    },
    userLogout: () => {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            localStorage.removeItem(TOKEN_KEY)
            set(() => ({ userInfo: {}, authMenu: [], permissions: [], roles: [] }))
            resolve(true)
          })
          .catch(e => {
            reject(e)
          })
      })
    }
  }))
)
export default useAppStore
