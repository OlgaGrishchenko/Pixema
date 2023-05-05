import { RootState } from "../store";

export default {
   getAllFilms: (state: RootState) => state.filmsReducer.allFilms,
   getSingleFilms: (state: RootState) => state.filmsReducer.singleFilms,
   getTrendsFilms: (state: RootState) => state.filmsReducer.trendsFilms,
   setSearchInputValue: (state: RootState) => state.filmsReducer.allFilms,
};