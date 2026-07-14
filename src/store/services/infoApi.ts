import {IGetListParam, IInfoShort, IReport} from "../../types/types";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_SERVER, infoDefault} from "../../constants";

export interface IInfoListParam extends IGetListParam {
}

interface IInfoParam {
  infoId: number;
  code?: string;
}

interface IInfoListResponse {
  recCount: number,
  infoList: IInfoShort[],
}

const infoApi = createApi({
  reducerPath: 'info',
  baseQuery: fetchBaseQuery({baseUrl: API_SERVER}),
  tagTypes: ['INFO_LIST', 'INFO'],
  endpoints: (builder) => ({
    getInfoList: builder.query<IInfoListResponse, IInfoListParam>({
      query: ({page=1, limit=infoDefault.limit}) => {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
        })
        return {
          url: `/info/?${params}`
        }
      },
      providesTags: ['INFO_LIST']
    }),
    getInfo: builder.query<IReport, IInfoParam>({
      query: ({infoId, code=''}) => ({url: `/info/${infoId}/?code=${code}`}),
      providesTags: ['INFO'],
    })
  })
})

export const {
  useLazyGetInfoListQuery,
  useGetInfoListQuery,
  useGetInfoQuery,
} = infoApi

export default infoApi