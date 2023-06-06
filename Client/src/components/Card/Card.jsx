import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorites, deleteFavorites } from '../../redux/actions';
import { useState, useEffect } from 'react';

function Card({  id, name, species, gender, image, onClose, status, origin, addFavorites, deleteFavorites, myFavorites }) { //las props SIEMPRE son un objeto. Acá hacemos un destructuring de todo lo que utilizaré
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         deleteFavorites(id);
      }
      else {
         setIsFav(true);
         addFavorites({id, name, species, gender, image, status, origin})
      }
   }
   useEffect(() => {
      myFavorites.forEach((favorite) => {
         if (favorite.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
    
   
   return (
      <div className={styles.container}>
         {
            isFav 
            ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         
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
         <h2>Origin: {origin}</h2>
         
         </div> 
        
         <img className={styles.image} src={image} alt="" />
         <div className={styles.dataContainer2}>
            <h2>Status: {status}</h2>
            </div> 
      </div>
   );
}  


const mapStateToProps = (state) => {
   return {
       myFavorites: state.myFavorites
   }

}
const mapDispatchToProps = (dispatch) => {
   return {
      addFavorites: (character) => dispatch(addFavorites(character)),
      deleteFavorites: (id) => dispatch(deleteFavorites(id))
   }
   
}
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
