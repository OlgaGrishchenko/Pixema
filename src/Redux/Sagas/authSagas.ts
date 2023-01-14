import { PayloadAction } from '@reduxjs/toolkit';
import { takeLatest, all, call } from 'redux-saga/effects';
import { registerUser } from '../Reducers/authReducer';
import { RegisterUserPayload } from '../Types/auth';
import Api from '../utils/api';

function* registerUserWorker(action: PayloadAction<RegisterUserPayload>) {
    const { datas: registerData, callback} = action.payload;

    const { ok, problem } = yield call (Api.registerUser, registerData)
    
    if(ok) {
        callback() 
    } else {
        console.warn ('Error while registering user:', problem)
    }
}

export default function* authSaga() {
    yield all ([
        takeLatest(registerUser, registerUserWorker)
        ])
}