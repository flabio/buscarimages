import React,{Fragment} from 'react';
const Error = ({mensaje}) => {
    return ( 
        <Fragment>
            <div className="alert alert-danger">{mensaje}</div>
        </Fragment>
     );
}
 
export default Error;