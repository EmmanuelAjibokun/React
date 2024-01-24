// Create a state management store with the redux toolkit

import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./authSlice"

const store = configureStore({
  reducer: {
    auth: authSlice
  }
});

export default store;