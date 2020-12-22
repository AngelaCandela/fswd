export default function Agenda(props) {
    return (
        <>
            <h1>Agenda - Contacts List</h1>
            <div class="row">
                    {props.contacts.map((contact, index) => {
                        return (
                            <ul key={contact.phone} className="col-6 list-group mb-4">
                                <li className="list-group-item active">Contacto {index}</li>
                                <li className="list-group-item">{contact.name}</li>
                                <li className="list-group-item">{contact.lastName}</li>
                                <li className="list-group-item">{contact.address}, {contact.province}, {contact.postcode}</li>
                                <li className="list-group-item">{contact.phone}</li>
                            </ul>
                        )
                    })}
            </div>
        </>
    )
}

