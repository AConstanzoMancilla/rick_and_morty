import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

const username = 'arita@gmail.com';
const password = '345rol';


function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const[access, setAccess] = useState(false);
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/')

  }, [access])
  
  const onClose = (id) => {
    const charactersFiltered = characters.filter(character => 
    character.id !== Number(id))
    setCharacters(charactersFiltered)
  }
  
  return (
    <div className='App' style={{ padding: '25px' }}>
      {
        location.pathname !== '/'
        ? <Nav onSearch={onSearch}/>
        : null
      }
      
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
     
    
    </div>
  )
}

export default App
