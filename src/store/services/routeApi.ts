import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_SERVER} from "../../constants";
import {IGetListParam, IRoute, IRouteShort} from "../../types/types";

export interface IRouteListParam extends IGetListParam {
  search?: string;
  length?: string;
}

interface IRouteListResponse {
  recCount: number;
  routeList: IRouteShort[];
}

const routeApi = createApi({
  reducerPath: 'route',
  baseQuery: fetchBaseQuery({baseUrl: API_SERVER}),
  tagTypes: ['ROUTE_LIST', 'ROUTE'],
  endpoints: (builder) => ({
    getRouteList: builder.query<IRouteListResponse, IRouteListParam>({
      query: ({page=1, limit=10, search='', length=''}) => {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
          search: search,
          length: length
        })
        return {
          url: `route/?${params}`
        }
      },
      providesTags: ['ROUTE_LIST'],
    }),
    getRoute: builder.query<IRoute, number>({
      query: (routeId) => ({url: `route/${routeId}/`}),
      providesTags: ['ROUTE'],
    }),
  })
})

export const {
  useLazyGetRouteListQuery,
  useGetRouteQuery,
} = routeApi

export default routeApi