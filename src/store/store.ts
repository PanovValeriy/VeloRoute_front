import {configureStore} from "@reduxjs/toolkit";
import routeApi from "./services/routeApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import reportApi from "./services/reportApi";
import eventApi from "./services/eventApi";
import newsApi from "./services/newsApi";
import infoApi from "./services/infoApi";
import userApi from "./services/userApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [routeApi.reducerPath]: routeApi.reducer,
    [reportApi.reducerPath]: reportApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [infoApi.reducerPath]: infoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      userApi.middleware,
      routeApi.middleware,
      reportApi.middleware,
      eventApi.middleware,
      newsApi.middleware,
      infoApi.middleware,
    ])
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
