import { configureStore } from "@reduxjs/toolkit";

// Middlewares
import logger from "redux-logger";

// Reducers
import rootReducer from "reducers/index";

function configureAppStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger)
  });

  return store;
}

const store = configureAppStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
