export const GET_POKEMON_LIST_START = 'GET_POKEMON_LIST_START';
export const GET_POKEMON_LIST_ERROR = 'GET_POKEMON_LIST_ERROR';
export const GET_POKEMON_LIST_SUCCESS = 'GET_POKEMON_LIST_SUCCESS';

export function getPokemonList() {
    return {
      type: GET_POKEMON_LIST_START
    };
  }


  export const GET_POKEMON_SINGLE_START = 'GET_POKEMON_SINGLE_START';
  export const GET_POKEMON_SINGLE_ERROR = 'GET_POKEMON_SINGLE_ERROR';
  export const GET_POKEMON_SINGLE_SUCCESS = 'GET_POKEMON_SINGLE_SUCCESS';
  
  export function getPokemonSingle(id) {
      return {
        type: GET_POKEMON_SINGLE_START,
        id
      };
    }

export const GET_TYPE_LIST_FILTER_START = 'GET_TYPE_LIST_FILTER_START';
export const GET_TYPE_LIST_FILTER_ERROR = 'GET_TYPE_LIST_FILTER_ERROR';
export const GET_TYPE_LIST_FILTER_SUCCESS = 'GET_TYPE_LIST_FILTER_SUCCESS';

export function getTypeListFilter() {
    return {
      type: GET_TYPE_LIST_FILTER_START
    };
  }

export const GET_ABILITY_LIST_FILTER_START = 'GET_ABILITY_LIST_FILTER_START';
export const GET_ABILITY_LIST_FILTER_ERROR = 'GET_ABILITY_LIST_FILTER_ERROR';
export const GET_ABILITY_LIST_FILTER_SUCCESS = 'GET_ABILITY_LIST_FILTER_SUCCESS';

export function getAbilityListFilter() {
    return {
      type: GET_ABILITY_LIST_FILTER_START
    };
  }

  export const GET_POKEMON_SINGLE_FILTER_START = 'GET_POKEMON_SINGLE_FILTER_START';
  export const GET_POKEMON_SINGLE_FILTER_ERROR = 'GET_POKEMON_SINGLE_FILTER_ERROR';
  export const GET_POKEMON_SINGLE_FILTER_SUCCESS = 'GET_POKEMON_SINGLE_FILTER_SUCCESS';
  
  export function getPokemonSingleFilter(path, id) {
      return {
        type: GET_POKEMON_SINGLE_FILTER_START,
        path,
        id
      };
    }
