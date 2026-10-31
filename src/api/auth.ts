import {API_SERVER, TOKEN_KEY} from "../constants";

export interface IUserData {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  nickName: string;
  status: number;
}

export interface ILoginResponse {
  token: string;
  user: IUserData;
}

export interface ILoginError {
  detail?: string;
  message?: string;
}

export interface IChangePassword {
  passwordOld: string;
  passwordNew: string;
}

export async function apiLogin(login: string, password: string): Promise<ILoginResponse> {
  const response = await fetch(`${API_SERVER}user/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login, password }),
  })
  if (!response.ok) {
    const errorData: ILoginError = await response.json().catch(() => {})
    throw new Error(errorData.detail || errorData.message || 'Ошибка авторизации')
  }
  return response.json();
}

export async function apiChangePassword(passwords: IChangePassword): Promise<string> {
  const response = await fetch(`${API_SERVER}user/changepassword/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': "Token " + getToken(),
    },
    body: JSON.stringify(passwords),
  })
  if (!response.ok) {
    const errorData: ILoginError = await response.json().catch(() => {})
    throw new Error(errorData.detail || errorData.message || 'Ошибка смены пароля')
  }
  return response.json();
}

export async function apiGet<T = unknown>(endpoint: string, token: string): Promise<T> {
  const response = await fetch(`${API_SERVER}/${endpoint}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    }
  })
  if (!response.ok) {
    const errorData: ILoginError = await response.json().catch(() => ({}))
    throw new Error(errorData.detail || errorData.message || 'Ошибка запроса')
  }
  return response.json();
}

export function saveToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

export function getHeaders(headers: Headers) {
  const token = getToken();
  if (token) {
    headers.set("Authorization", "Token " + token);
  }
  return headers
}
