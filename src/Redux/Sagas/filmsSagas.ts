import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { 
   getFilms,
   setFilms,
   getSingleFilms,
   setSingleFilms,
   getTrendsFilms,
   setTrendsFilms,
} from "../Reducers/filmsReducer";

import API from "../utils/api";
import APIfilms from "../utils/api";

function* getFilmsWorker(action: PayloadAction<undefined>) {
   const { ok, data, problem } = yield call(APIfilms.getAllFilms);

   if (ok && data) {
      yield put(setFilms(data.data.movies));
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