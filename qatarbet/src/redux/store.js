import { configureStore } from "@reduxjs/toolkit";

import bet from "./reducer/betSlice";
import gambler from "./reducer/gamblerSlice";
import user from "./reducer/userSlice";

export default configureStore({
  reducer: {
    user,
    gambler,
    bet
  }
})
