import { useState } from 'react'
import '../App.css'
import Card from './Card'

const Form = () => {

    const [estudiante, setEstudiante] = useState({
        nombreCompleto: '',
        matricula: ''
    })

    const [mostrarTarjeta, setMostrarTarjeta] = useState(false)
    const [error, setError] = useState(false)


    const onSubmitForm =(e) =>{
        e.preventDefault()

        const validarNombre = () =>{
            const withoutSpaces = estudiante.nombreCompleto.trim();

            return withoutSpaces.length > 2
        }

        const validarMatricula = () => {
            const withoutSpaces = estudiante.matricula.trim()

            return withoutSpaces.length > 5
        }

        
        if(validarNombre() && validarMatricula()){
            setMostrarTarjeta(true)
            setError(false)
        }else{
            setMostrarTarjeta(false) 
            setError(true)
        }

    }

    return(
        <div>
            <form onSubmit={onSubmitForm} className='form'>
            <label>Nombre completo del estudiante</label>
                <input type="text" onChange={(e) => setEstudiante({...estudiante, nombreCompleto: e.target.value})}/>
    
                <label>Matrícula</label>
                <input type="text" onChange={(e) => setEstudiante({...estudiante, matricula: e.target.value}) }/>
    
                <button type="submit">Cargar</button>
    
                </form>

                {error && <p>Por favor chequea que la información sea correcta</p>}
                
                {mostrarTarjeta && <Card estudiante={estudiante}/>}
        </div>
    )
}
export default Form
