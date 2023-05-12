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
} from "../Reducers/filmsReducer";

import API from "../utils/api";
import APIfilms from "../utils/api";
import { FilmsPayload } from "../Types/films";

function* getFilmsWorker(action: PayloadAction<FilmsPayload>) {
   const { query_term, page, offset }= action.payload;
   const { ok, data, problem } = yield call(APIfilms.getAllFilms, {query_term, page, offset});
   
   if (ok && data) {
      yield put(setFilms(data.data.movies));
      yield put(setTotalCount(data.data.movie_count));
      console.log(data.data)
   } else {
      console.warn("Error fetching posts: ", problem);
   }
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
   ]);
}