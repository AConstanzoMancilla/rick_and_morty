import styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
   const [character, setCharacter] = useState('');

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }
   
   
   
   return (
      <div className={styles.container}>
         <input type='search' onChange={(event)=>handleChange(event)} value={character} />
         <button onClick={() => onSearch(character)}>Search</button>
      </div>
   ); 
}
