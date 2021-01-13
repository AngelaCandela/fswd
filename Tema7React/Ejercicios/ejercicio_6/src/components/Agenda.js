import { useContext } from "react";
import { GlobalContext } from "../App";

export default function Agenda() {

    const {contacts, setContacts} = useContext(GlobalContext);

    const removeContact = (event, phone) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.phone !== phone));
    };

    return (
        <>
            <h1>Agenda - Contacts List</h1>
            <div className="row">
                {
                contacts.map((contact, index) => {
                return (
                    <ul key={contact.phone} className="col-6 list-group mb-4">
                        <li className="list-group-item active">Contacto {index}</li>
                        <li className="list-group-item">{contact.name}</li>
                        <li className="list-group-item">{contact.lastName}</li>
                        <li className="list-group-item">{contact.address}, {contact.province}, {contact.postcode}</li>
                        <li className="list-group-item">{contact.phone}</li>
                        <li className="list-group-item">
                            <button className="btn btn-warning"
                                onClick={(event) => removeContact(event, contact.phone)}>
                                Eliminar
                            </button>
                        </li>
                    </ul>
                )
                })
                }
            </div>
        </>
    )
}

