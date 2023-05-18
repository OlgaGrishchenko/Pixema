import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
   CardsListType, CardType
} from "../../Constants/@types";
import { FilmsPayload, SetFilmsPayload } from "../Types/films";

type FilmsReducerState = {
   allFilms: CardsListType;
   singleFilms: CardType | null;
   trendsFilms: CardsListType;
   searchInputValue: string,
   totalCount: number,
   pageTotalCount: number,
   searchedFilms: CardsListType,
   isLoading: boolean,
};

const initialState: FilmsReducerState = {
   allFilms: [],
   singleFilms: null,
   trendsFilms: [],
   searchInputValue: "",
   totalCount: 0,
   pageTotalCount: 0,
   searchedFilms: [],
   isLoading: false,
};

const filmsSlice = createSlice({
   name: "filmsReducer",
   initialState,
   reducers: {
      getFilms: (state, action: PayloadAction<FilmsPayload>) => {},
      setFilms: (state, action: PayloadAction<CardsListType>) => {state.allFilms = [...state.allFilms, ...action.payload];},
      
      setSearchInputValue: (state, action: PayloadAction<string>) => {state.searchInputValue = action.payload;},

      getSingleFilms: (state, action: PayloadAction<string>) => {},
      setSingleFilms: (state, action: PayloadAction<CardType>) => {state.singleFilms = action.payload;},

      getTrendsFilms: (state, action: PayloadAction<undefined>) => {},
      setTrendsFilms: (state, action: PayloadAction<CardsListType>) => {state.trendsFilms = action.payload;},
   
      setTotalCount: (state, action: PayloadAction<number>) => {state.totalCount = action.payload;},

      setPageTotalCount: (state, action: PayloadAction<number>) => {state.pageTotalCount = action.payload;},

      setValueSearch: (state, action: PayloadAction<string>) => {state.searchInputValue = action.payload},

      getSearchedFilms: (state, action: PayloadAction<FilmsPayload>) => {},
      setSearchedFilms: (state, action: PayloadAction<CardsListType>) => {
         if (action.payload) {
            state.searchedFilms = [...state.searchedFilms, ...action.payload]
          } else {
            state.searchedFilms = []
          }
      },
      setSearchedFilmsLoading: (state, action: PayloadAction<boolean>) => {
         state.isLoading = action.payload;
     },
   }
}
);

   export const { 
      getFilms,
      setFilms,
      getSingleFilms,
      setSingleFilms,
      getTrendsFilms,
      setTrendsFilms,
      setTotalCount,
      setPageTotalCount,
      getSearchedFilms,
      setSearchedFilms,
      setValueSearch,
      setSearchedFilmsLoading,
   } = filmsSlice.actions;

   const filmsReducer = filmsSlice.reducer;
   export default filmsReducer;