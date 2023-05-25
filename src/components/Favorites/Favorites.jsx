import Card from "../Card/Card";
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';


const Favorites = ({ myFavorites }) => {
    
    const dispatch = useDispatch();
    
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value)); 

    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }
    
    return (
        <>
        <select onChange={handleOrder}>
            <option value='Ascendente'>Ascendente</option>
            <option value='Descendente'>Descendente</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
        </select>
        {
            myFavorites?.map(favorite => {
                return (
                    <Card
                    key={favorite.id}
                    id={favorite.id}
                    name={favorite.name}
                    species={favorite.species}
                    gender={favorite.gender}
                    image={favorite.image}
                    origin={favorite.origin}
                    status={favorite.status}
                    />
                )
            })
        }
        </>
    )

}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);