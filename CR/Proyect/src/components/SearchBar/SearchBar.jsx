import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleOnChange = (e) => {
      setId(e.target.value);
   }

   return (
      <div
         style={{
            display: 'flex',
            margin:20,
            width: '100%',
            justifyContent: 'end',
            marginRight: 100,
         }}
         >
         <input 
            type='search' 
            placeholder='Buscar...'
            style={{
               border: '0px',
               borderRadius: '5px'
            }}
            onChange={handleOnChange}
         />
         <button 
            style={{height: 40, borderRadius: 5 }}
            onClick={() => onSearch(id)}
         >
            Agregar
         </button>
      </div>
   );
}
