import { RootState } from "../store";

export default {
   getAllFilms: (state: RootState) => state.filmsReducer.allFilms,
   getSingleFilms: (state: RootState) => state.filmsReducer.singleFilms,
   getTrendsFilms: (state: RootState) => state.filmsReducer.trendsFilms,
   setValueSearch: (state: RootState) => state.filmsReducer.searchInputValue,
   getTotalCount: (state: RootState) => state.filmsReducer.totalCount,
   getPageTotalCount: (state: RootState) => state.filmsReducer.pageTotalCount,
   getSearchedFilms: (state: RootState) => state.filmsReducer.searchedFilms,
   getLoading: (state: RootState) => state.filmsReducer.isLoading,
};