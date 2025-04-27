import {configureStore} from "@reduxjs/toolkit";
import routeApi from "./services/routeApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import reportApi from "./services/reportApi";
import eventApi from "./services/eventApi";
import newsApi from "./services/newsApi";

export const store = configureStore({
  reducer: {
    [routeApi.reducerPath]: routeApi.reducer,
    [reportApi.reducerPath]: reportApi.reducer,
    [eventApi.reducerPath]: eventApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      routeApi.middleware,
      reportApi.middleware,
      eventApi.middleware,
      newsApi.middleware,
    ])
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
