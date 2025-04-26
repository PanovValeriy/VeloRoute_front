import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_SERVER, eventDefault} from "../../constants";
import {IEvent, IEventShort, IGetListParam} from "../../types/types";

export interface IEventListParams extends IGetListParam {
  search?: string,
  hideArchive?: boolean,
  sort?: string,
}

interface IEventParams {
  eventId: number;
  code?: string;
}

interface IEventListResponse {
  recCount: number,
  eventList: IEventShort[],
}


const eventApi = createApi({
  reducerPath: 'event',
  baseQuery: fetchBaseQuery({baseUrl: API_SERVER}),
  tagTypes: ['EVENT_LIST', 'EVENT'],
  endpoints: (builder)=> ({
    getEventList: builder.query<IEventListResponse, IEventListParams>({
      query: ({page=1, limit=eventDefault.limit, search='', hideArchive=false, sort=eventDefault.sort}) => {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
          search: search,
          hideArchive: (hideArchive) ? 'true' : 'false',
          sort: sort,
        })
        return {
          url: `/event/?${params}`
        }
      },
      providesTags: ['EVENT_LIST']
    }),
    getEvent: builder.query<IEvent, IEventParams>({
      query: ({eventId, code=''}) => {
        return {
          url: `/event/${eventId}/?code=${code}`
        }
      },
      providesTags: ['EVENT']
    })
  })
})

export const {
  useLazyGetEventListQuery,
  useGetEventQuery
} = eventApi

export default eventApi