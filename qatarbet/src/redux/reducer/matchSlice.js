import { createSlice } from "@reduxjs/toolkit";

const initialState = { matches: [] }

export const matchSlice = createSlice({
    name: 'match',
    initialState: {
      matches: [],
      allMatches: []
    },
    reducers: {
        matches(state, action) {
            state.matches = action.payload
            state.allMatches = action.payload
        },
        matchesFinished(state, action) {
          const allMatches = state.allMatches;
          const finishedMatches = action.payload = "Finished" ? allMatches.filter(match => match.status = "Finished") : allMatches;
          state.matches = finishedMatches
        },
        matchesNotStarted(state, action) {
          const allMatches = state.allMatches;
          const NotStartedMatches = action.payload = "Not Started" ? allMatches.filter(match => match.status = "Not Started") : allMatches;
          state.matches = NotStartedMatches
        },
        allMatches(state, action){
          if(action.payload === "All Matches"){
            state.matches = state.allMatches
          }
        }
      }
})

export const { matches, matchesFinished, matchesNotStarted, allMatches } = matchSlice.actions;
export default matchSlice.reducer;
