import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: []
  },
  reducers: {
    User: (state, action) => {
      state.user = action.payload
    },
    RemoveUser: (state) => {
      state.user = []
    }
  }
})

export const { User, RemoveUser } = userSlice.actions;
export default userSlice.reducer;


