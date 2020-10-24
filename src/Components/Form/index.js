import React from 'react';

class Form extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            nombre: "",
            materia: props.materias[0].materia,
            nota: 0
        };
    }

    guardarNombre = (event) => {
        this.setState({ nombre: event.target.value });
    }

    guardarMateria = (event) => {
        this.setState({materia: event.target.value});
    }

    guardarNota = (event) => {
        this.setState({ nota: event.target.value });
    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    sendData = () => {
        if ( this.state.nombre != "" && this.state.materia != "" && this.state.nota != "")
        {
            const ALUMNO = this.state;
            this.props.saveData(ALUMNO);
        }
        
            
    }

    render()
    {
        return (
            <div className="columna">
                <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Alumno</label>
                    <select onChange={this.guardarNombre} className="form-control" id="exampleFormControlSelect1">
                        <option disabled selected> - </option>
                        {

                            this.props.alumnos.map(function(alumno, index)
                            {
                                return <option key={`alu-${index}`} value={alumno.nombre}>{alumno.nombre}</option>
                            })

                        }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Materia</label>
                    <select onChange={this.guardarMateria} className="form-control" id="exampleFormControlSelect1">
                        <option disabled selected> - </option>
                        {
                            this.props.materias.map(function(materia, index)
                            {
                                return <option key={`mat-${index}`} value={materia.materia}>{materia.materia}</option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Nota</label>
                    <input onChange={this.guardarNota} className="form-control" type="number"/>
                </div>

                <button type="submit" onClick={this.sendData} className="btn btn-primary">Enviar</button>
            </form>
            </div>
        );
    }
}

export default Form;