import { useState } from "react";

export default function Formulario({ setContacts }) {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [province, setProvince] = useState("");
    const [postcode, setPostcode] = useState("");
    const [phone, setPhone] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleAddress = (event) => {
        setAddress(event.target.value);
    }

    const handleProvince = (event) => {
        setProvince(event.target.value);
    }

    const handlePostcode = (event) => {
        setPostcode(event.target.value);
    }

    const handlePhone = (event) => {
        setPhone(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            name: name,
            lastName: lastName,
            address: address,
            province: province,
            postcode: postcode,
            phone: phone,
        };
        
        setContacts(prevContacts => [...prevContacts, newContact]);

    // La función setContacts (como cualquier función setXxx) siempre recibe como primer parámetro
    // el estado prevContacts, es decir el último estado guardado.
    // Gracias a eso, podemos utilizar el estado previo sin tener que pasárselo a Formulario
    // arriba del todo, sino simplemente poniendolo en los paréntesis de nuestra función setContacts(prevContacts)

        setName("");
        setLastName("");
        setAddress("");
        setProvince("");
        setPostcode("");
        setPhone("");
    }

    return (
        <form className="form-group" onSubmit={handleSubmit}>
            <h1>New contact</h1>
            <input type="text" className="form-control mb-3" placeholder="Name" value={name} onChange={handleName}></input>
            <input type="text" className="form-control mb-3" placeholder="Last Name" value={lastName} onChange={handleLastName}></input> 
            <input type="text" className="form-control mb-3" placeholder="Address" value={address} onChange={handleAddress}></input> 
            <input type="text" className="form-control mb-3" placeholder="Province" value={province} onChange={handleProvince}></input> 
            <input type="text" className="form-control mb-3" placeholder="Postcode" value={postcode} onChange={handlePostcode}></input> 
            <input type="text" className="form-control mb-3" placeholder="Phone" value={phone} onChange={handlePhone}></input> 
            <input type="submit" value="Add contact" className="btn btn-success"></input>         
        </form>
    )
}
