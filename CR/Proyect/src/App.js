import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav";
import axios from "axios";

const example = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
     const repeated = characters.find((item) => item.id === Number (id))
    if (repeated) return alert('¡Este personaje ya fue agregado!')
    
    try {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            // setCharacters(data.name)
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    } catch (error) {
      console.log("====================================");
      console.log({ error });
      console.log("====================================");
    }
  }

  const onClose = (id) => {
    // const filtro = characters.filter((char) => char.id !== id);
    // setCharacters(filtro);
    setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));
  };
  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
