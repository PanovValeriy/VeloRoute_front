import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_SERVER} from "../../constants";
import {INews} from "../../types/types";

export interface INewsListResponse {
  recCount: number;
  newsList: INews[];
}

interface INewsListParams {
  count: number;
  operation: number;
  showEventArchive?: boolean;
}

const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({baseUrl: API_SERVER}),
  tagTypes: ['NEWS_LIST'],
  endpoints: (builder) => ({
    getNewsList: builder.query<INewsListResponse, INewsListParams>({
      query: ({count, operation, showEventArchive=false})=> {
        const params = new URLSearchParams({
          count: count.toString(),
          operation: operation.toString(),
          showEventArchive: (showEventArchive) ? 'true' : 'false',
        })
        return {
          url: `news/?${params}`
        }
      }
    })
  })
})

export const {useGetNewsListQuery} = newsApi

export default newsApi