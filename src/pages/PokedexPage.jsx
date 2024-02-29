import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonName } from '../store/slices/pokemonName.Slice';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokedexPage/PokeCard';
import SelectType from '../components/pokedexPage/SelectType';
import './styles/pokedexPage.css'
const PokedexPage = () => {
  const [selectValue, setSelectValue] = useState('allPokemons')
console.log(selectValue)
  const traineName= useSelector(store => store.trainerName);
  const pokemonName= useSelector(store => store.pokemonName);

  const dispatch= useDispatch();
  const[pokemons,getPokemons,getPerType]=useFetch();

  useEffect(() => {
    if(selectValue=== 'allPokemons'){

      const url = 'https://pokeapi.co/api/v2/pokemon/?limit=130';
      getPokemons(url);
    }else{
      getPerType(selectValue);
    }
    
  }, [selectValue]);
  
  const textInput= useRef(); 
  const handleSubmit= (event) => {
    event.preventDefault();
    dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()));
    textInput.current.value='';
  }
  
  const cbfilter= () => {
    if(pokemonName){
      return pokemons?.results.filter(element => element.name.includes(pokemonName));
    }else {
      return pokemons?.results;
    }
    
  }

  return (
    <div className='pokedex'>
      <section className='poke__header'>

      <h3><span>Bienvenido {traineName}!!</span> <br />Aquí podras encontrar tu pokemon favorito!! </h3>
      <div>

      <form onSubmit={handleSubmit} className='form'>
        <input type="text" ref={textInput}/>
          <button className='btn'>Buscar</button>
      </form>
      <SelectType
      setSelectValue={setSelectValue}
      />
      </div>
      </section>

      <section className='poke__container'>
        {
          cbfilter()?.map(poke=>(
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
          ))
        }

      </section>
    </div>
  )
}

export default PokedexPage