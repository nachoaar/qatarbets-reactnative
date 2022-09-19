import { configureStore } from "@reduxjs/toolkit";

import bet from "./reducer/betSlice";
import gambler from "./reducer/gamblerSlice";
import bets from "./reducer/betSlice";
import matches  from "./reducer/matchSlice";
import user from "./reducer/userSlice";

export default configureStore({
  reducer: {
    user,
    gambler,
    bets,
    matches,
    bet
  }
})
