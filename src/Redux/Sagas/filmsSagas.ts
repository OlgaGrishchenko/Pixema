import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { 
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
   setSearchedFilmsLoading,
} from "../Reducers/filmsReducer";

import API from "../utils/api";
import APIfilms from "../utils/api";
import { FilmsPayload } from "../Types/films";

function* getFilmsWorker(action: PayloadAction<FilmsPayload>) {
   yield put(setSearchedFilmsLoading(true));
   const { query_term, page, offset }= action.payload;
   const { ok, data, problem } = yield call(APIfilms.getAllFilms, {query_term, page, offset});
   
   if (ok && data) {
      yield put(setFilms(data.data.movies));
      yield put(setTotalCount(data.data.movie_count));
   } else {
      console.warn("Error fetching posts: ", problem);
   }
   yield put(setSearchedFilmsLoading(false));
}

function* getSearchedFilmsWorker(action: PayloadAction<FilmsPayload>) {
   yield put(setSearchedFilmsLoading(true));
   const { query_term, page }= action.payload;
   const { ok, data, problem } = yield call(APIfilms.getAllFilms, {query_term, page});
   
   if (ok && data) {
      yield put(setSearchedFilms(data.data.movies));
      yield put(setTotalCount(data.data.movie_count));
   } else {
      console.warn("Error fetching posts: ", problem);
   }

   yield put(setSearchedFilmsLoading(false));
}

function* getSingleFilmsWorker(action: PayloadAction<string>) {
   const { ok, data, problem } = yield call(APIfilms.getSingleFilms, action.payload);
   if (ok && data) {
      yield put(setSingleFilms(data.data.movie));
   } else {
      console.warn("Error fetching single post: ", problem);
   }
}

function* getTrendsFilmsWorker(action: PayloadAction<undefined>) {
   const { ok, data, problem } = yield call(APIfilms.getTrendsFilms);

   if (ok && data) {
      yield put(setTrendsFilms(data.data.movies));
   } else {
      console.warn("Error fetching posts: ", problem);
   }
}

export default function* filmsSaga() {
   yield all([
      takeLatest(getFilms, getFilmsWorker),
      takeLatest(getSingleFilms, getSingleFilmsWorker),
      takeLatest(getTrendsFilms, getTrendsFilmsWorker),
      takeLatest(getSearchedFilms, getSearchedFilmsWorker),
   ]);
}