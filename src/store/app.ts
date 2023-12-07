import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface AppState {
  theme: string
  userInfo: any
  setTheme: (by: string) => void
  getUserInfo: () => void
}

const useAppStore = create<AppState, any>(
  devtools(
    persist(
      set => ({
        theme: 'light',
        userInfo: {},
        setTheme: by => set(() => ({ theme: by })),
        getUserInfo: () => {
          set(() => ({ userInfo: { nickName: '系统管理员' } }))
        }
      }),
      { name: 'appStore', storage: createJSONStorage(() => localStorage) }
    )
  )
)

export default useAppStore
