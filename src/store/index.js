import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName.Slice.js";
import pokemonName from "./slices/pokemonName.Slice.js";
const store=configureStore({
    reducer:{
        trainerName,
        pokemonName,
    }
}
    
);
export default store; 