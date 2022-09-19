import { createSlice } from "@reduxjs/toolkit";

export const matchSlice = createSlice({
    name: 'match',
    initialState: {
        matches: [],
        matchId: {}
    },
    reducers: {
        getMatch: (state, action) => {
            state.matches = action.payload
        },
        getMatchId: (state, action) => {
            state.matchId = action.payload
        }
    }
})

export const { getMatch, getMatchId } = matchSlice.actions;
export default matchSlice.reducer;