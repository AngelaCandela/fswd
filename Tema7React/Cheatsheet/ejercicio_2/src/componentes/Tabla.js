function Tabla(props) {    
    
    return (
        <div>
            <h2 className="card-title mx-4 mt-4">Tabla</h2>                
            <table className="table table-striped table-hover mx-auto w-75">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Sales</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                { props.array.map(book => {
                    return <tr>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.sales}</td>
                        <td>{book.price}</td>
                    </tr>
                })
                }
                </tbody>                                                        
            </table>
        </div>        
        
    )
}

export { Tabla };