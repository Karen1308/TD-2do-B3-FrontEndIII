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
                                <tr>
                                    <td key={index}> {juego.nombre} </td>
                                    <td> {juego.tipo} </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Card;