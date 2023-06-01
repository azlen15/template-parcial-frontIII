
const Card = ({estudiante}) => {

    return (
        <div className='tarjeta'>
                <h2>Estudiante Cargado</h2>
                <h4>Nombre Completo: {estudiante.nombreCompleto}</h4>
                <h4>Matrícula: {estudiante.matricula}</h4>
            </div> 
        )

};

export default Card;