import { Map } from 'immutable';

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

const initialState = Map({
  pokemonListLoad: false,
  pokemonListData: {},
  pokemonListError: false,

  pokemonSingleLoad: false,
  pokemonSingleData: {},
  pokemonSingleError: false,

  typeListFilterLoad: false,
  typeListFilterData: {},
  typeListFilterError: false,

  abilityListFilterLoad: false,
  abilityListFilterData: {},
  abilityListFilterError: false,
});

const actionsMap = {
  [GET_POKEMON_LIST_START]: (state) => {
    return state.merge(Map({
      pokemonListData: {},
      pokemonListLoad: true,
      pokemonListError: false
    }));
  },
  [GET_POKEMON_LIST_ERROR]: (state) => {
    return state.merge(Map({
      pokemonListData: {},
      pokemonListLoad: false,
      pokemonListError: true,
    }));
  },
  [GET_POKEMON_LIST_SUCCESS]: (state, action) => {
    return state.merge(Map({
      pokemonListData: action.response,
      pokemonListLoad: false,
      pokemonListError: false,
    }));
  },

  [GET_POKEMON_SINGLE_START]: (state) => {
    return state.merge(Map({
      pokemonSingleData: {},
      pokemonSingleLoad: true,
      pokemonSingleError: false
    }));
  },
  [GET_POKEMON_SINGLE_ERROR]: (state) => {
    return state.merge(Map({
      pokemonSingleData: {},
      pokemonSingleLoad: false,
      pokemonSingleError: true,
    }));
  },
  [GET_POKEMON_SINGLE_SUCCESS]: (state, action) => {
    return state.merge(Map({
      pokemonSingleData: action.response,
      pokemonSingleLoad: false,
      pokemonSingleError: false,
    }));
  },

  [GET_TYPE_LIST_FILTER_START]: (state) => {
    return state.merge(Map({
      typeListFilterData: {},
      typeListFilterLoad: true,
      typeListFilterError: false
    }));
  },
  [GET_TYPE_LIST_FILTER_ERROR]: (state) => {
    return state.merge(Map({
      typeListFilterData: {},
      typeListFilterLoad: false,
      typeListFilterError: true,
    }));
  },
  [GET_TYPE_LIST_FILTER_SUCCESS]: (state, action) => {
    return state.merge(Map({
      typeListFilterData: action.response,
      typeListFilterLoad: false,
      typeListFilterError: false,
    }));
  },

  [GET_ABILITY_LIST_FILTER_START]: (state) => {
    return state.merge(Map({
      abilityListFilterData: {},
      abilityListFilterLoad: true,
      abilityListFilterError: false
    }));
  },
  [GET_ABILITY_LIST_FILTER_ERROR]: (state) => {
    return state.merge(Map({
      abilityListFilterData: {},
      abilityListFilterLoad: false,
      abilityListFilterError: true,
    }));
  },
  [GET_ABILITY_LIST_FILTER_SUCCESS]: (state, action) => {
    return state.merge(Map({
      abilityListFilterData: action.response,
      abilityListFilterLoad: false,
      abilityListFilterError: false,
    }));
  },

  [GET_POKEMON_SINGLE_FILTER_START]: (state) => {
    return state.merge(Map({
      pokemonListData: {},
      pokemonListLoad: true,
      pokemonListError: false
    }));
  },
  [GET_POKEMON_SINGLE_FILTER_ERROR]: (state) => {
    return state.merge(Map({
      pokemonListData: {},
      pokemonListLoad: false,
      pokemonListError: true,
    }));
  },
  [GET_POKEMON_SINGLE_FILTER_SUCCESS]: (state, action) => {
    return state.merge(Map({
      pokemonListData: action.response,
      pokemonListLoad: false,
      pokemonListError: false,
    }));
  }
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}