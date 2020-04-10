import promisePolyfill from 'es6-promise';
import 'isomorphic-fetch';

const IS_PRODUCTION = process.env.NODE_ENV === 'production';
let REACT_APP_API_ROOT = process.env.REACT_APP_DEV_API_ROOT;
if (IS_PRODUCTION) {
  REACT_APP_API_ROOT = process.env.REACT_APP_PROD_API_ROOT;
}
const REACT_APP_API_VERSION = process.env.REACT_APP_API_VERSION;

promisePolyfill.polyfill();

function getPokemonList() {
    return fetch(`${ REACT_APP_API_ROOT }/api/${ REACT_APP_API_VERSION }/pokemon/?limit=1000`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json();
    });
  }

  function getPokemonSingle(id) {
    return fetch(`${ REACT_APP_API_ROOT }/api/${ REACT_APP_API_VERSION }/pokemon/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json();
    });
  }

  function getTypeListFilter() {
    return fetch(`${ REACT_APP_API_ROOT }/api/${ REACT_APP_API_VERSION }/type/?limit=1000`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json();
    });
  }

  function getAbilityListFilter() {
    return fetch(`${ REACT_APP_API_ROOT }/api/${ REACT_APP_API_VERSION }/ability/?limit=1000`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json();
    });
  }

  function getPokemonSingleFilter(path,id) {
    return fetch(`${ REACT_APP_API_ROOT }/api/${ REACT_APP_API_VERSION }/${path}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      return response.json();
    });
  }

  export default {
    getPokemonList,
    getPokemonSingle,
    getTypeListFilter,
    getAbilityListFilter,
    getPokemonSingleFilter
  };