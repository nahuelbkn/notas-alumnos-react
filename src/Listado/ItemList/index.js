import React from "react";
class Itemlist extends React.Component 
{
    
    render() 
    {
        return (
            <div>
            {
                this.props.alumno && 
                (
                    <>
                        <h3> {this.props.alumno.nombre}</h3>
                        <ul>
                        {
                            this.props.alumno.materias.map(function(materia)
                            {
                                return <li>Materia: {materia.nombre} Nota: {materia.nota} </li>
                            })
                        }
                        </ul>
                    </>
                )
            }
            </div>
        )
    }
}
export default Itemlist;