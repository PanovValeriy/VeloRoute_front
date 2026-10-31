import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_SERVER} from "../../constants";
import {IErrorResponse, IRegister} from "../../types/types";

export interface IUserResponse {
  id: number;
  login: string;
  firstName: string;
  lastName: string;
  nickName: string;
}

export interface IUserParams {
  userId: number;
}

export interface ILoginResponse {
  token: string;
  user: IUserResponse;
}

export interface ILoginParams {
  login: string;
  password: string;
}

const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({baseUrl: API_SERVER}) as BaseQueryFn<string | FetchArgs, unknown, IErrorResponse, {}>,
  tagTypes: ['USER'],
  endpoints: (builder) => ({
    getProfile: builder.query<IUserResponse, IUserParams>({
      query: () => {
        return {
          url: `/user/`
        }
      },
      providesTags: ['USER']
    }),
    login: builder.query<ILoginResponse, ILoginParams>({
      query: ({login, password}) => {
        const loginBody = {
          login, password
        }
        return {
          url: `/user/login/`,
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(loginBody)
        }
      }
    }),
    logout: builder.query({
      query:() => {
        return {
          url: '/user/logout/',
          method: 'POST'
        }
      }
    }),
    register: builder.mutation<any, IRegister>({
      query: (data: IRegister) => {
        return {
          url: '/user/register/',
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }
      }
    })
  })
})

export const {
  useGetProfileQuery,
  useLoginQuery,
  useLazyLoginQuery,
  useLogoutQuery,
  useRegisterMutation,
} = userApi

export default userApi