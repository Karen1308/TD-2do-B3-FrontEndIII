import './App.css'

function Turnos({pacientes}){
    return(
        <div>
            <h2>Turnos</h2>
            <div className="containerCard">
                {pacientes.map((paciente, index)=>(
                    <div key={index} className="card">
                        <h3> {paciente.nombre} {paciente.apellido} </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Turnos;