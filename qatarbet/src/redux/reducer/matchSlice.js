import { createSlice } from "@reduxjs/toolkit";

export const matchSlice = createSlice({
    name: 'match',
    initialState: {
        matches: [],
        filtered: [],
        backup: [],
        matchId: {},
        allMatches: [],
    },
    reducers: {
        getMatch: (state, action) => {
            state.matches = action.payload
            state.filtered = action.payload
            state.backup = action.payload
        },
        matchesFinished(state, action) {
          const finishedMatches = action.payload = "Finished" ? state.backup.filter((match) => match.status === action.payload) : state.backup;
          state.filtered = finishedMatches
        },
        matchesNotStarted(state, action) {
          const NotStartedMatches = action.payload = "Not Started" ? state.backup.filter((match) => match.status === action.payload) : state.backup;
          state.filtered = NotStartedMatches
        },
        allMatches(state, action){
          if(action.payload === "All Matches"){
            state.filtered = state.backup
          }
        }
      }
})

export const { getMatch, matchesFinished, matchesNotStarted, allMatches } = matchSlice.actions;
export default matchSlice.reducer;

