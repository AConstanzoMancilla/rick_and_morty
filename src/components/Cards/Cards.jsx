import Card from "../Card/Card";

export default function Cards({ characters, onClose }) {
   return (
   <div style={{display: 'flex', justifyContent: 'space-between' }}>
      {characters.map(({ id, name, status, species, gender, image, origin }) => {  //no se puede utilizar forEach porque no retorna nada, solo recorre. 
         return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={onClose}
              status={status}
              origin={origin.name}


              //key se la guarda React para poder hacer cambios en las plantillas, según su ID específico. 
            />
         )
      })
   }

   </div>
   )
} 
 