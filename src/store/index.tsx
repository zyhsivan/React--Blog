import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reduer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
