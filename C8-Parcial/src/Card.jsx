function Card({juegos}){
    return(
        <div>
            <div className="containerCard">
                <table>
                    <thead>
                        <td> Nombre del juego </td>
                        <td>  Tipo de juego </td>
                    </thead>
                    <tbody>
                        {juegos.map((juego, index)=>(
                            <>
                                <td key={index}> {juego.nombre} </td>
                                <td> {juego.tipo} </td>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Card;