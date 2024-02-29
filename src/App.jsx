
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokedexIdPage from './pages/PokedexIdPage'
import ProtectedRoutes from './pages/ProtectedRoutes'
import HeaderFooter from './pages/HeaderFooter'


function App() {

  return (
    
      <Routes>
        <Route element = {<HeaderFooter/>}>
        <Route path='/'element={<HomePage/>}/>
        <Route element = {<ProtectedRoutes/>}> 
        <Route path='/pokedex'element={<PokedexPage/>}/>
        <Route path='/pokedex/:id'element={<PokedexIdPage/>}/>
        </Route>
        </Route>
      </Routes>
    
  )
}

export default App
