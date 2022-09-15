import { configureStore } from "@reduxjs/toolkit";

import user from "./reducer/userSlice";


export default configureStore({
  reducer: {
    user
  }
})