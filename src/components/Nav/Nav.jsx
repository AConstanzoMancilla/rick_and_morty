import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';

const Nav = ( { onSearch }) => {
    return (
    <>
    
    <SearchBar onSearch={onSearch}/>
    <button>
        <Link to='/about'>ABOUT</Link>

    </button>
    <br></br>
    <button>
        <Link to='/home'>HOME</Link>

    </button>

    </>
    
    )
}

export default Nav;
