
import style from 'styled-components'
import { styleJs } from './styles';
import './styles.css'
import styleModule from './styles.module.css'

const OriginItem = style.div`
   font-size: 10px;
   font-weight: bold;
   padding-bottom: 20px;
`

export default function Card(props) {
   return (
      <div style={styleJs.containerCard}>
         <button 
            onClick={() => props.onClose(props.id)}
            className='styleButton'
         >X</button>
         <img 
            src={props.image} 
            alt='No se puedo cargar la imagen' 
            width={180} 
            height={180}
            style={styleJs.stylesImg}
         />
         <h2 style={styleJs.title}>{props.name}</h2>
         <div 
            className={styleModule.containerSubtitle}
         >
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         <OriginItem>{props.origin}</OriginItem>
      </div>
   );
}

