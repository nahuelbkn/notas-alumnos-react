import React from 'react';

class InputGustavo extends React.Component
{
    handleChangeHijo = (event)=>{
        console.log("Hola desde handleChangeHijo");
        this.props.handleChangePadre(event.target.value);
    }

    render() {
        return (
            <input onChange={this.handleChangeHijo} value={this.props.default} type="text"/>
        );
    }
}

export default InputGustavo;