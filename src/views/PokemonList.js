import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPokemonList, getPokemonSingle, getTypeListFilter, getAbilityListFilter, getPokemonSingleFilter } from '../sagas/Pokemon/actions';

import Loader from './global/Loader';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPokemon: '',
      rotatedImagePosition: true,
      intervalId: null,
      filterActive: false,
      filterName: '',
      filterPath: '',
    };
    this.handleListOnClick = this.handleListOnClick.bind(this);
    this.handleFilterButton = this.handleFilterButton.bind(this);
    this.handleSelectFilter = this.handleSelectFilter.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);
  }

  componentDidMount() {
    this.props.getPokemonList();
    this.props.getTypeListFilter();
    this.props.getAbilityListFilter();
  }

  componentDidUpdate(prevProps, prevState) {
    const { getPokemonSingle, getPokemonSingleFilter } = this.props;
    const { selectedPokemon, filterName, filterPath } = this.state;
    if(selectedPokemon !== prevState.selectedPokemon) {
      getPokemonSingle(selectedPokemon);
    }
    if(filterName !== prevState.filterName && filterName !== '') {
      getPokemonSingleFilter(filterPath, filterName)
    }
  }

  handleListOnClick(e) {
    const self = this;
    clearInterval(this.state.intervalId)
    this.setState({
      selectedPokemon: e.target.id,
      filterActive: false
    })
    let intervalId = setInterval(() => {
      const rotated = !self.state.rotatedImagePosition
      self.setState({
        rotatedImagePosition: rotated
      });
    }, 3000)
    this.setState({ intervalId })
  }

  handleFilterButton() {
    this.setState({ 
      filterActive: true,
      selectedPokemon: ''
    })
  }

  handleSelectFilter(e) {
    this.setState({
      filterName: e.target.innerText,
      filterPath: e.target.getAttribute('name'),
      filterActive: false
    })
  }

  handleClearFilter() {
    this.setState({
      filterName: '',
      filterPath: '',
      filterActive: false,
      selectedPokemon: ''
    })
    this.props.getPokemonList();
  }

  render() {
    const { pokemonListData, pokemonListLoad, pokemonSingleLoad, pokemonSingleData, typeListFilterData, abilityListFilterData } = this.props;
    const { selectedPokemon, rotatedImagePosition, filterActive, filterName, filterPath } = this.state;
    let pokemons = [];
    if (pokemonListData && pokemonListData.results) {
      pokemons = pokemonListData.results;
    } else if (pokemonListData && pokemonListData.pokemon) {
      pokemonListData.pokemon.forEach(poke => {
        pokemons.push(poke.pokemon);
      });
    }
    return (
	    <div>
        <div className='top-screen'>
          {
            filterActive ?
            <div className='filter-wrapper'>
              <div className='row no-gutters'>
                <div className='col-6'>Types</div>
                <div className='col-6'>Abilities</div>
              </div>
              <div className='row no-gutters justify-content-center filter-list'>
                <div className='col-6 filter-list-side'>
                  <ul>{typeListFilterData && typeListFilterData.results ? typeListFilterData.results.map(type => {
                         return <li className='filter-li' onClick={this.handleSelectFilter} key={type.name} name='type'>{type.name}</li>
                      }) : null}</ul>
                </div>
                <div className='col-6 filter-list-side'>
                  <ul>{abilityListFilterData && abilityListFilterData.results ? abilityListFilterData.results.map(ability => {
                         return <li className='filter-li' onClick={this.handleSelectFilter} key={ability.name} name='ability'>{ability.name}</li>
                      }) : null}</ul>
                </div>
              </div>
            </div> :
            pokemonListLoad || selectedPokemon === '' || pokemonSingleLoad?
            <Loader /> :
            pokemonSingleData && pokemonSingleData.name ? 
            <div className='single-wrapper'>
              <div className='row no-gutters'>
                <div className='col-3'>
                  {
                    pokemonSingleData.sprites.front_default && pokemonSingleData.sprites.back_default?
                      rotatedImagePosition ?
                      <img src={ pokemonSingleData.sprites.front_default } alt={pokemonSingleData.name} className='single-image'/> :
                      <img src={ pokemonSingleData.sprites.back_default } alt={pokemonSingleData.name} className='single-image'/> : null
                  }
                </div>
                <div className='col-3'>
                  {
                    pokemonSingleData.sprites.front_shiny && pokemonSingleData.sprites.back_shiny?
                      rotatedImagePosition ?
                      <img src={ pokemonSingleData.sprites.front_shiny } alt={pokemonSingleData.name} className='single-image'/> :
                      <img src={ pokemonSingleData.sprites.back_shiny } alt={pokemonSingleData.name} className='single-image'/> : null
                  }
                </div>
                <div className='col-3'>
                  {
                    pokemonSingleData.sprites.front_female && pokemonSingleData.sprites.back_female?
                      rotatedImagePosition ?
                      <img src={ pokemonSingleData.sprites.front_female } alt={pokemonSingleData.name} className='single-image'/> :
                      <img src={ pokemonSingleData.sprites.back_female } alt={pokemonSingleData.name} className='single-image'/> : null
                  }
                </div>
                <div className='col-3'>
                  {
                    pokemonSingleData.sprites.front_shiny_female && pokemonSingleData.sprites.back_shiny_female?
                      rotatedImagePosition ?
                      <img src={ pokemonSingleData.sprites.front_shiny_female } alt={pokemonSingleData.name} className='single-image'/> :
                      <img src={ pokemonSingleData.sprites.back_shiny_female } alt={pokemonSingleData.name} className='single-image'/> : null
                  }
                </div>
              </div>
              <div className='row no-gutters single-name'><span className='align-middle'>{pokemonSingleData.name}</span></div>
              <div className='row no-gutters single-desc'>
                <div className='col-6 padding-right-2'>
                  <div className='row no-gutters'>
                    <div className='col-4 mr-auto'>
                      <span>id</span><br />
                      <span>height</span><br />
                      <span>weight</span><br />
                      <span>abilities</span>
                    </div>
                    <div className='col'>
                      <span>: {pokemonSingleData.id}</span><br />
                      <span>: {pokemonSingleData.height ? pokemonSingleData.height / 10 : '?'}m</span><br />
                      <span>: {pokemonSingleData.weight ? pokemonSingleData.weight /10 : '?'}kg</span><br />
                    </div>
                  </div>
                  <div className='row no-gutters justify-content-center single-scroll-desc-wrapper single-scroll-abilities'>
                    <ul>{pokemonSingleData.abilities.map(ability => {
                         return <li key={ability.ability.name}>{ability.ability.name}</li>
                      })}</ul>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='row no-gutters'>
                    <div className='col-4 mr-auto'>
                      <span>exp</span><br />
                      <span>types</span><br />
                      <span>moves</span>
                    </div>
                    <div className='col'>
                      <span>: {pokemonSingleData.base_experience ? pokemonSingleData.base_experience : '?'}</span><br />
                      <span>: {pokemonSingleData.types.map(type => {
                         return <span key={type.type.name}>{type.type.name}</span>
                      })}</span><br />
                    </div>
                  </div>
                  <div className='row no-gutters justify-content-center single-scroll-desc-wrapper single-scroll-moves'>
                    <ul>{pokemonSingleData.moves.map(move => {
                         return <li key={move.move.name}>{move.move.name}</li>
                      })}</ul>
                  </div>
                </div>
              </div>
            </div> : null
          }
        </div>
        <div className='bottom-screen'>
          {
            pokemonListLoad ? 
            <div className='bottom-loading'>loading...</div> : 
            <div className='row no-gutters h-100'>
              <div className='col-4'>
                <div className='list-filter-desc'>
                  <span>count :</span><br />
                  <span>{pokemonListData && pokemonListData.count ? pokemonListData.count : 
                    pokemonListData && pokemonListData.pokemon ? pokemonListData.pokemon.length : '-'}</span><br /><br />
                  <span>filter :</span><br />
                  <span>-{filterPath}-</span><br />
                  <span>{filterName}</span>
                </div>
                <div className='list-filter-button' onClick={this.handleFilterButton}>FILTER</div>
                {
                  filterName ?
                  <div 
                  className='list-filter-clear-button active'
                  onClick={this.handleClearFilter}>clear filter</div> :
                  <div className='list-filter-clear-button'>clear filter</div>
                }
              </div>
              <div className='col-8'>
                <div className='list-scroll-wrapper'>
                  <ul className='list-scroll'>
                    {
                      pokemons ?
                      pokemons.map((pokemon, index) => {
                        return (
                          <li 
                            className={selectedPokemon === pokemon.name ? 'list-scroll-item active' : 'list-scroll-item'} 
                            key={index} 
                            id={pokemon.name} 
                            onClick={this.handleListOnClick} 
                            role='presentation'>
                              {pokemon.name}
                            </li>
                        )
                      }) : null
                    }
                  </ul>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
		)
  }
}

// redux providing state takeover
const mapStateToProps = (state) => {
    return {
      pokemonListLoad: state.pokemon.get('pokemonListLoad'),
      pokemonListData: state.pokemon.get('pokemonListData'),
      pokemonListError: state.pokemon.get('pokemonListError'),

      pokemonSingleLoad: state.pokemon.get('pokemonSingleLoad'),
      pokemonSingleData: state.pokemon.get('pokemonSingleData'),
      pokemonSingleError: state.pokemon.get('pokemonSingleError'),

      typeListFilterLoad: state.pokemon.get('typeListFilterLoad'),
      typeListFilterData: state.pokemon.get('typeListFilterData'),
      typeListFilterError: state.pokemon.get('typeListFilterError'),

      abilityListFilterLoad: state.pokemon.get('abilityListFilterLoad'),
      abilityListFilterData: state.pokemon.get('abilityListFilterData'),
      abilityListFilterError: state.pokemon.get('abilityListFilterError')
    }
}
export default connect(mapStateToProps, {getPokemonList, getPokemonSingle, getTypeListFilter, getAbilityListFilter, getPokemonSingleFilter})(PokemonList)