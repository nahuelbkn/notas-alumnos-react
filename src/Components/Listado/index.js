import React from 'react';
import Itemlist from './ItemList';

class Listado extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
    
        }
    }
    
    render()
    {
        return (
            
            this.props.alumnos.map( (alumno) => {
                return <Itemlist alumno={alumno}></Itemlist>
            })
           
        )
    }
}

export default Listado;