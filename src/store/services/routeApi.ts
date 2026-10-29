import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_SERVER, routeDefault} from "../../constants";
import {IGetListParam, IRoute, IRouteShort} from "../../types/types";
import {getHeaders} from "../../api/auth";

export interface IRouteListParam extends IGetListParam {
  search?: string;
  length?: string;
  complexity?: number;
  sort?: string;
  showCount?: string;
}

interface IRouteListResponse {
  recCount: number;
  routeList: IRouteShort[];
}

interface IRouteParam {
  routeId: number;
  code?: string;
}

const routeApi = createApi({
  reducerPath: 'route',
  baseQuery: fetchBaseQuery({
    baseUrl: API_SERVER,
    prepareHeaders: getHeaders
  }),
  tagTypes: ['ROUTE_LIST', 'ROUTE', 'ROUTE_RANDOM'],
  endpoints: (builder) => ({
    getRouteList: builder.query<IRouteListResponse, IRouteListParam>({
      query: ({page=1, limit=routeDefault.limit, search='', length='', complexity=0, sort = routeDefault.sort}) => {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
          search: search,
          length: length,
          complexity: complexity.toString(),
          sort: sort,
        })
        return {
          url: `route/?${params}`
        }
      },
      providesTags: ['ROUTE_LIST'],
    }),
    getRoute: builder.query<IRoute, IRouteParam>({
      query: ({routeId, code = ''}) => ({url: `route/${routeId}/?code=${code}`}),
      providesTags: ['ROUTE'],
    }),
    getRouteRandom: builder.query<IRouteListResponse, null>({
      query: () => ({url: 'route/random/3/'}),
      providesTags: ['ROUTE_RANDOM'],
    }),
    toggleRouteLike: builder.mutation<any, number>({
      query:(routeId ) => ({
        url: `route/like/${routeId}/`,
        method: 'POST'
      }),
      invalidatesTags: ['ROUTE']
    })
  })
})

export const {
  useLazyGetRouteListQuery,
  useGetRouteQuery,
  useLazyGetRouteRandomQuery,
  useToggleRouteLikeMutation,
} = routeApi

export default routeApi