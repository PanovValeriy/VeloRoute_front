import {IGetListParam, IReport, IReportShort} from "../../types/types";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_SERVER, reportDefault} from "../../constants";

export interface IReportListParam extends IGetListParam {
  search?: string,
  sort: string,
}

interface IReportParam {
  reportId: number;
  code?: string;
}

interface IReportListResponse {
  recCount: number,
  reportList: IReportShort[],
}

const reportApi = createApi({
  reducerPath: 'report',
  baseQuery: fetchBaseQuery({baseUrl: API_SERVER}),
  tagTypes: ['REPORT_LIST', 'REPORT'],
  endpoints: (builder) => ({
      getReportList: builder.query<IReportListResponse, IReportListParam>({
        query: ({page=1, limit=reportDefault.limit, search='', sort=''}) => {
          const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            search: search,
            sort: sort,
          })
          return {
            url: `/report/?${params}`
          }
        },
        providesTags: ['REPORT_LIST']
      }),
      getReport: builder.query<IReport, IReportParam>({
        query: ({reportId, code=''}) => ({url: `/report/${reportId}/?code=${code}`}),
        providesTags: ['REPORT'],
      })
  })
})

export const {
  useLazyGetReportListQuery,
  useGetReportQuery,
} = reportApi

export default reportApi