import Producto from './Producto'

import { render } from 'react-dom'

function Principal() {
    return (
        <div>
            <h1> Lista de productos </h1>
            <Producto nombre="Coca cola"/>
            <Producto nombre="Cerveza"/>
        </div>
    )
}

export default Principal