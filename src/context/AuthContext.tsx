import React, {createContext, useCallback, useContext, useState} from 'react'
import {USER_DATA_KEY} from "../constants";
import {
  apiChangePassword,
  apiLogin,
  apiProfile,
  getToken,
  IChangePassword,
  IUserData,
  removeToken,
  saveToken
} from "../api/auth";

export interface IAuthState {
  user: IUserData | null;
  token: string | null;
}

export interface IAuthContextType {
  user: IUserData | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (login: string, password: string) => Promise<IUserData>;
  logout: () => void;
  updateUser: (userData: IUserData) => void;
  reloadProfile: () => void;
}

function getInitialAuthState(): IAuthState {
  const token = getToken()
  const savedUser = localStorage.getItem(USER_DATA_KEY)!;
  return {
    user: token && savedUser ? JSON.parse(savedUser) as IUserData : null,
    token
  }
}

const AuthContext = createContext<IAuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<IAuthState>(getInitialAuthState())
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const login = useCallback(async (login: string, password: string): Promise<IUserData> => {
    setIsLoading(true)
    try {
      const data = await apiLogin(login, password)
      const {token, user} = data
      saveToken(token)
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(user))
      setState({user, token})
      return user as IUserData
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(USER_DATA_KEY)
    removeToken()
    setState({user: null, token: null})
  }, [])

  const updateUser = useCallback((userData: IUserData) => {
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData))
    setState((prev) => ({...prev, user: userData}))
  }, [])

  const reloadProfile = useCallback(async (): Promise<void> => {
    setIsLoading(true)
    try {
      const user = await apiProfile()
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(user))
      setState((prev) =>({...prev, user}))
    }
    catch {
      const userNew = state.user
      if (userNew) {
        userNew.status = -1
        setState((prev) => ({...prev, user: userNew}))
      }
    }
    finally {
      setIsLoading(false)
    }
  }, [])

  const changeUserPassword = useCallback(async (passwords: IChangePassword) => {
    setIsLoading(true)
    try {
      const result = await apiChangePassword(passwords)
      console.log(result)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const value: IAuthContextType = {
    user: state.user,
    token: state.token,
    isAuthenticated: !!state.token,
    isLoading,
    login,
    logout,
    updateUser,
    reloadProfile,
  }

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}

export function useAuth(): IAuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export default AuthContext