import { all, call, takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";


import { 
   getFilms,
   setFilms,
} from "../Reducers/filmsReducer";

import API from "../utils/api";

function* getFilmsWorker(action: PayloadAction<undefined>) {
   const { ok, data, problem } = yield call(API.getAllFilms);

   if (ok && data) {
      yield put(setFilms(data.data.movies));
   } else {
      console.warn("Error fetching posts: ", problem);
   }
}

export default function* filmsSaga() {
   yield all([
      takeLatest(getFilms, getFilmsWorker),
   ]);
}