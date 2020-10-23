import React from 'react';
import Itemlist from './ItemList';

class Listado extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            alumnos: this.props.alumnos
        }
    }
    
    render()
    {
        return (
            this.state.alumnos && (
                this.state.alumnos.map( (alumno) => {
                    return <Itemlist alumno={alumno}></Itemlist>
                })
            )
           
        )
    }
}

export default Listado;