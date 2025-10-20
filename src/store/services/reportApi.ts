import {IGetListParam, IReport, IReportShort} from "../../types/types";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_SERVER, reportDefault} from "../../constants";

export interface IReportListParam extends IGetListParam {
  search?: string;
  sort?: string;
  routeId?: number;
  eventId?: number;
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
        query: ({page=1, limit=reportDefault.limit, search='', sort='', routeId=0, eventId=0}) => {
          const params = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString(),
            search: search,
            sort: sort,
            routeId: routeId.toString(),
            eventId: eventId.toString(),
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
  useGetReportListQuery,
  useGetReportQuery,
} = reportApi

export default reportApi