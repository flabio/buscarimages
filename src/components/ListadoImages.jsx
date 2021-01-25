import React,{Fragment} from 'react';
import Imagenes from './Imagenes';
const ListadoImages = ({images}) => {
    return ( 
<Fragment>
<div className="col-12 p-5 row">
    {images.map(option=>(
         <Imagenes key={option.id} option={option}/>
    ))}
    </div>
</Fragment>
     );
}
 
export default ListadoImages;