import React, { useRef } from 'react'
import { setTrainerName } from '../store/slices/trainerName.Slice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const dispatch = useDispatch();
  const trainerName= useSelector ((store)=>store.trainerName);
  const navigate = useNavigate()
  const textInput = useRef()

    const handleSubmit= (event) => {
        event.preventDefault();
      dispatch(setTrainerName(textInput.current.value.trim()));
      navigate('/pokedex')
    }
  return (
    <div className='homepage'>
        <h1><span>¡Hola entrenador!</span></h1>
        <h2>Para poder comenzar, dame tu nombre</h2>
        <form onSubmit={handleSubmit} className='form'>
            <input type="text" ref={textInput}/>
            <button className='btn'>Comenzar</button>
        </form>
        
    </div>
  )
}

export default HomePage