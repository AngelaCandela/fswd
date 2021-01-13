function Navbar() {   

    return (
        <div className="d-flex justify-content-between align-items-center p-4">
            <nav className="navbar navbar-light bg-light vw-100">
                <button className="btn btn-outline-success">Button</button>                               
                <div>
                    <a className="navbar-brand" href="/">Link</a>
                    <a className="navbar-brand" href="/">Link</a>
                </div>
            </nav>                        
        </div>        
    )
}

export { Navbar };

/* const verMensaje = (nombre) => {
    //Esto antes del return se ejecuta sin hacer ningún click y guarda el parámetro 'nombre'

    return(event) => {
        alert(`Hola ${nombre} desde ${event.target.textContent}`);
    }
} */

// Es equivalente a lo de arriba
// const verMensaje = nombre => event => alert(`Hola ${nombre} desde ${event.target.textContent}`)