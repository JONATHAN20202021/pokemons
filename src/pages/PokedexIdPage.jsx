import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';

const PokedexIdPage = () => {
  const [pokeData,getPokeData] = useFetch();
  const param= useParams();

  useEffect(() => {
    getPokeData(url);
  }, [])
  
  const url=`https://pokeapi.co/api/v2/pokemon/${param.id}`;
  return (
    <article >
        <img src={pokeData?.sprites.other['official-artwork'].front_default} alt="photo" />
        <h3>{pokeData?.name}</h3>
</article>
  )
}

export default PokedexIdPage;1