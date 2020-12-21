function Lista(props) {
    return (
        <div>
            <h3 className="card-title px-4 mt-4">{props.categoria}</h3>                
            <ul className="list-group">
                { props.productos.map(producto => {
                    return <li className="list-group-item mx-4" key={producto.producto}>{producto.id} {producto.producto} {producto.marca} {producto.modelo && producto.modelo} - Precio: {producto.precio}€</li>
                })
                }                                        
            </ul>
        </div>        
        
    )
}

export default Lista;

/* primerComponente.defaultProps = {
    nombre: "Fulano",
    apellidos: "Menganito Menganete",
    edad: 27
}

primerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string,
    edad: propTypes.number
} */