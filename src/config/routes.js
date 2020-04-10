import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../views/Home';
import PokemonList from '../views/PokemonList';
import NotFound from '../views/404';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  POKEMONLIST: `${publicPath}pokemonlist`
};

export default () => (
  <Switch>
    <Route exact path={ routeCodes.HOME } component={ Home } />
    <Route path={ routeCodes.POKEMONLIST } component={ PokemonList } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
