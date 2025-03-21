import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_SERVER} from "../../constants";
import {IEvent, IEventShort, IGetListParam} from "../../types/types";

interface IEventListParams extends IGetListParam {
  search?: string,
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
      query: ({page=1, limit=10}) => {
        return {
          url: '/event/'
        }
      },
      providesTags: ['EVENT_LIST']
    }),
    getEvent: builder.query<IEvent, number>({
      query: (eventId: number) => {
        return {
          url: `/event/${eventId}/`
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