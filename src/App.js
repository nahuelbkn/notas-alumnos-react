import React from 'react';
import NavBar from "./NavBar";
import ALUMNOS from "./alumnos";
import MATERIAS from "./materias";

import './App.css';
import Form from './Form';
import Listado from './Listado';
import FormGustavo from './FormGustavo';



class App extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      notasAlumnos: [ {nombre: "Pepe", materias: [{nombre: "materiaPrueba", nota: 11}]}, {nombre: "Pepe", materias: [{nombre: "materiaPrueba", nota: 11}]} ]
    }
  }

  
  

saveData = (objAlumno) => {
    let auxArrayNotas = [...this.state.notasAlumnos];

    if ( auxArrayNotas.length == 0 )
    {
      const NUEVO_ALUMNO = {
        nombre: objAlumno.nombre,
        materias: [
          {
            nombre: objAlumno.materia,
            nota: objAlumno.nota
          }
        ]
      }

      auxArrayNotas.push(NUEVO_ALUMNO);
    }
    else
    {
      let findedStudent = false;

      auxArrayNotas.forEach( (alumno, i) => {
        if ( alumno.nombre == objAlumno.nombre )
        {
          findedStudent = true;

          if (findedStudent)
          {
            let findedSubjet = false;

            

            alumno.materias.forEach( (materia) => {
              if ( materia.nombre == objAlumno.materia)
              {
                findedSubjet = true;

                materia.nota = objAlumno.nota;
              }
            })

            if (!findedSubjet)
            {
              alumno.materias.push({nombre: objAlumno.materia, nota: objAlumno.nota});
            }
          }
        }
      })

      if (!findedStudent)
      {
        const NUEVO_ALUMNO = {
          nombre: objAlumno.nombre,
          materias: [
            {
              nombre: objAlumno.materia,
              nota: objAlumno.nota
            }
          ]
        }
  
        auxArrayNotas.push(NUEVO_ALUMNO);
      }
    }
    
    /* this.state.notasAlumnos = auxArrayNotas */
    this.setState({notasAlumnos: auxArrayNotas});
    console.log(auxArrayNotas)
    console.log(this.state.notasAlumnos)
  }

  render()
  {
    return (
      <>
        
        <NavBar title={"Guayerd High School"}></NavBar>
  
        <Form saveData={this.saveData} alumnos={ALUMNOS} materias={MATERIAS}></Form>
  
        <Listado alumnos={this.state.notasAlumnos}></Listado>

  
      
  
      </>
  
      
    );
  }
}

export default App;
