import { take, fork, call, put } from 'redux-saga/effects';
import pokemon from '../../apis/pokemon';
import {
  GET_POKEMON_LIST_START,
  GET_POKEMON_LIST_ERROR,
  GET_POKEMON_LIST_SUCCESS,

  GET_POKEMON_SINGLE_START,
  GET_POKEMON_SINGLE_ERROR,
  GET_POKEMON_SINGLE_SUCCESS,

  GET_TYPE_LIST_FILTER_START,
  GET_TYPE_LIST_FILTER_ERROR,
  GET_TYPE_LIST_FILTER_SUCCESS,

  GET_ABILITY_LIST_FILTER_START,
  GET_ABILITY_LIST_FILTER_ERROR,
  GET_ABILITY_LIST_FILTER_SUCCESS,

  GET_POKEMON_SINGLE_FILTER_START,
  GET_POKEMON_SINGLE_FILTER_ERROR,
  GET_POKEMON_SINGLE_FILTER_SUCCESS
} from './actions';

function* getPokemonList() {
  try {
    const response = yield call(pokemon.getPokemonList);
    if (response) {
      yield put({ type: GET_POKEMON_LIST_SUCCESS, response });
    } else {
      throw response; // throw the err response
    }
  } catch (e) {
    yield put({ type: GET_POKEMON_LIST_ERROR, e });
  }
}

function* watchGetPokemonList() {
  while (true) {
    yield take(GET_POKEMON_LIST_START);
    yield fork(getPokemonList);
  }
}

function* getPokemonSingle(id) {
    try {
      const response = yield call(pokemon.getPokemonSingle, id);
      if (response) {
        yield put({ type: GET_POKEMON_SINGLE_SUCCESS, response });
      } else {
        throw response; // throw the err response
      }
    } catch (e) {
      yield put({ type: GET_POKEMON_SINGLE_ERROR, e });
    }
  }
  
  function* watchGetPokemonSingle() {
    while (true) {
      const {id} = yield take(GET_POKEMON_SINGLE_START);
      yield fork(getPokemonSingle, id);
    }
  }

  function* getTypeListFilter() {
    try {
      const response = yield call(pokemon.getTypeListFilter);
      if (response) {
        yield put({ type: GET_TYPE_LIST_FILTER_SUCCESS, response });
      } else {
        throw response; // throw the err response
      }
    } catch (e) {
      yield put({ type: GET_TYPE_LIST_FILTER_ERROR, e });
    }
  }
  
  function* watchGetTypeListFilter() {
    while (true) {
      yield take(GET_TYPE_LIST_FILTER_START);
      yield fork(getTypeListFilter);
    }
  }

  function* getAbilityListFilter() {
    try {
      const response = yield call(pokemon.getAbilityListFilter);
      if (response) {
        yield put({ type: GET_ABILITY_LIST_FILTER_SUCCESS, response });
      } else {
        throw response; // throw the err response
      }
    } catch (e) {
      yield put({ type: GET_ABILITY_LIST_FILTER_ERROR, e });
    }
  }
  
  function* watchGetAbilityListFilter() {
    while (true) {
      yield take(GET_ABILITY_LIST_FILTER_START);
      yield fork(getAbilityListFilter);
    }
  }

  function* getPokemonSingleFilter(path, id) {
    try {
      const response = yield call(pokemon.getPokemonSingleFilter, path, id);
      if (response) {
        yield put({ type: GET_POKEMON_SINGLE_FILTER_SUCCESS, response });
      } else {
        throw response; // throw the err response
      }
    } catch (e) {
      yield put({ type: GET_POKEMON_SINGLE_FILTER_ERROR, e });
    }
  }
  
  function* watchGetPokemonSingleFilter() {
    while (true) {
      const {path, id} = yield take(GET_POKEMON_SINGLE_FILTER_START);
      yield fork(getPokemonSingleFilter, path, id);
    }
  }


export default function* authSagas() {
  yield fork(watchGetPokemonList);
  yield fork(watchGetPokemonSingle);
  yield fork(watchGetTypeListFilter);
  yield fork(watchGetAbilityListFilter);
  yield fork(watchGetPokemonSingleFilter);
}
