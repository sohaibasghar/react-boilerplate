import { call, spawn, all, takeEvery, put } from 'redux-saga/effects';

import { getAllUser, setUsers } from '../store/slices/userSlice';
const getUserRequest = () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
    return res.json();
  });
};

function* getUser() {
  const users = yield call(getUserRequest);
  yield put(setUsers(users));
}

function* callGetUsers() {
  yield takeEvery(getAllUser.type, getUser);
}

export default function* rootSaga() {
  yield all([spawn(callGetUsers)]);
}
