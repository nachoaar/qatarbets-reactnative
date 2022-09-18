import { configureStore } from "@reduxjs/toolkit";

import gambler from "./reducer/gamblerSlice";
import bets from "./reducer/betSlice";
import matches  from "./reducer/matchSlice";

export default configureStore({
  reducer: {
    gambler,
    bets,
    matches
  }
})
