import {IGetListParam, IReport, IReportShort} from "../../types/types";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_SERVER} from "../../constants";

export interface IReportListParam extends IGetListParam {
  search?: string,
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
        query: ({page=1, limit=10, search=''}) => {
          const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            search: search
          })
          return {
            url: `/report/?${params}`
          }
        },
        providesTags: ['REPORT_LIST']
      }),
      getReport: builder.query<IReport, number>({
        query: (reportId) => ({url: `/report/${reportId}/`}),
        providesTags: ['REPORT'],
      })
  })
})

export const {
  useLazyGetReportListQuery,
  useGetReportQuery,
} = reportApi

export default reportApi