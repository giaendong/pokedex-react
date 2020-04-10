import { all } from 'redux-saga/effects';

import pokemon from './Pokemon/sagas';

// combine all sagas
export default function* rootSaga() {
    yield all([
        pokemon()
    ]);
}