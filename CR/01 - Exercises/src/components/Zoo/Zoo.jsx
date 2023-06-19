import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */

  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: []
  })

  // Opcion 1 
  const handleInputChange = (event) => {
    setZoo({
      ...zoo,
      zooName: event.target.value
    })
  }

  // Opcion 2
  // function handleInputChange () {
  // }

  const  handleSpecies = (event) => {
    const filtro = zoo.allAnimals.filter((animal) => animal.specie === event)
    setZoo({
      ...zoo,
      animals: filtro
    })
  }

  const handleAllSpecies = () => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals
    })
  }

  React.useEffect(() => {
    fetch('http://localhost:3001/zoo')
   .then((res) => res.json())
   .then((data) =>
      setZoo({
         ...zoo,
         animals: data.animals,
         species: data.species,
         allAnimals: data.animals,
      })
   )
   .catch((error) => console.log(error));
    return () => {

    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div className={styledZoo.divContent}>
      <label >Zoo Name:</label>
      <input 
        value={zoo.zooName}
        onChange={handleInputChange}
      />
      <h1 >{zoo.zooName}</h1>

      <Species 
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
        species={zoo.species}
      />
      <Animals
        animals={zoo.animals}
      />

    </div>
  );
}
