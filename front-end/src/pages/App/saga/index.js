import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

import { SEARCH_SUCCESS, FETCH_GITUSER } from '../modules/index';
import { searchSuccess } from '../modules/actions';

import { fetchUserAPI } from '../api';

export function* fetchGitUserBykeyword (option) {
    console.log(option.payload);
    try {
        const {data} = yield fetchUserAPI(option.payload);
        console.log(data);
        yield put(searchSuccess(data.items));
    } catch (err) {
        console.log(err);
    }
}

function* appSaga() {
    console.log('hello saga!');

    yield takeEvery(FETCH_GITUSER, fetchGitUserBykeyword);
}

export default appSaga;