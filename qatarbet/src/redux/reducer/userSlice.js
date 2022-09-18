import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: []
  },
  reducers: {
    User: (state, action) => {
      state.user = action.payload
    }
  }
})

export const { User } = userSlice.actions;
export default userSlice.reducer;
