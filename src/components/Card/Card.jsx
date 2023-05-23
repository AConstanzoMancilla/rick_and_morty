import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({  id, name, species, gender, image, onClose, status, origin }) { //las props SIEMPRE son un objeto. Acá hacemos un destructuring de todo lo que utilizaré
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={() => onClose(id)}>X</button>
         </div>
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
        <div className={styles.dataContainer}>
         <h2>Name: {name}</h2>
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>{origin.name}</h2>
         
         </div> 
        
         <img className={styles.image} src={image} alt="" />
         <div className={styles.dataContainer2}>
            <h2>Status: {status}</h2>
            </div> 
      </div>
   );
}  
