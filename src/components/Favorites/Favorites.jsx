import Card from "../Card/Card";
import { connect } from 'react-redux';


const Favorites = ({ myFavorites }) => {
    return (
        <>
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