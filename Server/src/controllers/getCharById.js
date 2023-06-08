const URL = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`)
        if(!data.name) throw new Error(`No hay datos suficientes del personaje con el ID: ${id}`);
        
        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            status: data.status
            }
        return res.status(200).json(character)
    } catch (error) {
        error.message.includes('ID') //evaluando el error que llega por parámetro, dependiendo si incluye el ID. 
        ? res.status(404).send(error.message)//error de id, manda el mensaje not found. 
        : res.status(500).send(error.response.data.error) //error del servidor, no tiene que ver con el ID y el mensaje es el que envía axios directamente. 

    }

}
module.exports = {
    getCharById
}
