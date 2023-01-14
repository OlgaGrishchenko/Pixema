import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
   CardsListType,
} from "../../Constants/@types";

type FilmsReducerState = {
   allFilms: CardsListType;
};

const initialState: FilmsReducerState = {
   allFilms: [],
};

const filmsSlice = createSlice({
   name: "filmsReducer",
   initialState,
   reducers: {
      getFilms: (state, action: PayloadAction<undefined>) => {},
      setFilms: (state, action: PayloadAction<CardsListType>) => {state.allFilms = action.payload;},
   }
});

   export const { 
      getFilms,
      setFilms,
   } = filmsSlice.actions;

   const filmsReducer = filmsSlice.reducer;
   export default filmsReducer;