import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: []
  },
  reducer: {
    User: (state, action) => {
      state.users = action.payload
    } 
  }
})

export const { User  } = userSlice.actions;
export default userSlice.reducer;