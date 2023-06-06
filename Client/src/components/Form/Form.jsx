import { useState } from 'react';
import validation from '../Validation/Validation';



const Form = ({ login }) => {
    const[errors, setErrors] = useState({});
    const[userData, setUserData] = useState({
        username: '',
        password: ''
    });
    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label style={{ color:'white'}} htmlFor='username'>Username:</label>
            <input type="text" name='username' value={userData.username} onChange={handleChange}/>
            {errors.username && <p style={{ color: 'white'}}>{errors.username}</p>}
            <hr/>
            <label style={{ color:'white'}} htmlFor='password'>Password:</label>
            <input type="text" name='password' value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{ color: 'white'}}>{errors.password}</p>}
            
            <button>Login</button>

        </form>
    )

}

export default Form;