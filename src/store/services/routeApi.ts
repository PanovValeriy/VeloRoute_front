import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_SERVER, routeDefault} from "../../constants";
import {IGetListParam, IRoute, IRouteShort} from "../../types/types";

export interface IRouteListParam extends IGetListParam {
  search?: string;
  length?: string;
  complexity?: number;
  sort?: string;
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
  baseQuery: fetchBaseQuery({baseUrl: API_SERVER}),
  tagTypes: ['ROUTE_LIST', 'ROUTE'],
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
  })
})

export const {
  useLazyGetRouteListQuery,
  useGetRouteQuery,
} = routeApi

export default routeApi