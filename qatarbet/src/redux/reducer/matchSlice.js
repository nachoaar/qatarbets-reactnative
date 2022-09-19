import { createSlice } from "@reduxjs/toolkit";

const initialState = { matches: [] }

export const matchSlice = createSlice({
    name: 'match',
    initialState,
    reducers: {
        matches(state, action) {
            state.matches = action.payload
        }
    }
})

export const { matches } = matchSlice.actions;
export default matchSlice.reducer;