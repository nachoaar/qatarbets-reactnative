import { configureStore } from "@reduxjs/toolkit";

import gambler from "./reducer/gamblerSlice";
import bets from "./reducer/betSlice";

export default configureStore({
  reducer: {
    gambler,
    bets
  }
})
