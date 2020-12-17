function Lista(props) {
    const sinModelo = "Sin modelo";
    return (
        <div>
            <h4 >{props.categoria}</h4>                
            <ul>
                { props.productos.map(producto => {
                    return <li key={producto.producto}>{producto.id} {producto.producto} {producto.marca} {producto.modelo && producto.modelo} {producto.precio}</li>
                })
                }                                        
            </ul>
        </div>        
        
    )
}

export default Lista;