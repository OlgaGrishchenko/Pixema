import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
   CardsListType, CardType
} from "../../Constants/@types";
import { FilmsPayload } from "../Types/films";

type FilmsReducerState = {
   allFilms: CardsListType;
   singleFilms: CardType | null;
   trendsFilms: CardsListType;
   searchInputValue: string,
};

const initialState: FilmsReducerState = {
   allFilms: [],
   singleFilms: null,
   trendsFilms: [],
   searchInputValue: "",
};

const filmsSlice = createSlice({
   name: "filmsReducer",
   initialState,
   reducers: {
      getFilms: (state, action: PayloadAction<FilmsPayload>) => {},
      setFilms: (state, action: PayloadAction<CardsListType>) => {state.allFilms = action.payload;},
      
      setSearchInputValue: (state, action: PayloadAction<string>) => {state.searchInputValue = action.payload;},

      getSingleFilms: (state, action: PayloadAction<string>) => {},
      setSingleFilms: (state, action: PayloadAction<CardType>) => {state.singleFilms = action.payload;},

      getTrendsFilms: (state, action: PayloadAction<undefined>) => {},
      setTrendsFilms: (state, action: PayloadAction<CardsListType>) => {state.trendsFilms = action.payload;},

      },

   }
);

   export const { 
      getFilms,
      setFilms,
      getSingleFilms,
      setSingleFilms,
      getTrendsFilms,
      setTrendsFilms,
      setSearchInputValue
   } = filmsSlice.actions;

   const filmsReducer = filmsSlice.reducer;
   export default filmsReducer;