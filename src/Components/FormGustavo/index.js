import React from 'react';
import Input from './InputGustavo';

class FormGustavo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            nombre: ""
        };
    }

    handleChangeNombre = (valor) => {
        this.setState({ nombre: valor.toUpperCase() });
    }

    render() {
        return (
            <>
                <p>Hola, este es el componente del Form</p>
                {/* <input onChange={this.handleChange} type="text"></input> */}
                <Input default={this.state.nombre} handleChangePadre={this.handleChangeNombre}></Input>
                <br />
                <h1>{this.state.nombre}</h1>
            </>
        );
    }
}
export default FormGustavo;