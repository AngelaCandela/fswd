function Lista(props) {
    return (
        <div>
            <h3 className="card-title px-4 mt-4">{props.categoria}</h3>                
            <ul className="list-group">
                { props.productos.map((producto, index) => {
                    return <li className="list-group-item mx-4" key={index}>{producto.id} {producto.producto} {producto.marca} {producto.modelo && producto.modelo} - Precio: {producto.precio}€</li>
                })
                }                                        
            </ul>
        </div>        
        
    )
}

export default Lista;

//DefaultProps

/* primerComponente.defaultProps = {
    nombre: "Fulano",
    apellidos: "Menganito Menganete",
    edad: 27
}

//PropTypes

primerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string,
    edad: propTypes.number
} */