import { configureStore } from "@reduxjs/toolkit";

import gambler from "./reducer/gamblerSlice";


export default configureStore({
  reducer: {
    gambler
  }
})
