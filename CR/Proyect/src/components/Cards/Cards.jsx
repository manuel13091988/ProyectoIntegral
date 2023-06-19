import Card from '../Card/Card';

// Opcion 1 directamente props
export default function Cards(props) {

// Opcion 2 destructuring
// export default function Cards({ characters}) {

   // opcion 3 destructuring
   const { characters} = props;

   return (
      <div style={{
         margin: 20,
         display: 'flex',
         maxWidth: '60%',
         flexWrap: 'wrap',
      }}>
         {characters.map((personaje) => {
            const {
               id,
               name,
               status,
               species,
               gender,
               origin,
               image
            } = personaje;

            return (
               <Card
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={props.onClose}
               />
            )
         })}
      </div>
   );
}
