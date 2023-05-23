const validation = (userData) => {
    const errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.username)){
        errors.username = 'El username ingresado no es válido';
    }
    if(!userData.username){
        errors.username ='Debe ingresar un usuario';
    }
    if(userData.username.length > 35){
        errors.username = 'El usuario no puede superar los 35 caracteres';
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'La password debe tener al menos un número';
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La password debe ser entre 6 y 10 caracteres';
    }
    return errors;

}

export default validation;