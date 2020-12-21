import { useState } from "react";

export default function Formulario({ setContacts }) {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [province, setProvince] = useState("");
    const [postCode, setPostCode] = useState("");
    const [phone, setPhone] = useState("");

    const handleName= (event) => {
        setName(event.target.value);
    }

    const handleLastname= (event) => {
        setLastname(event.target.value);
    }

    const handleAddress= (event) => {
        setAddress(event.target.value);
    }

    const handleProvince= (event) => {
        setProvince(event.target.value);
    }

    const handlePostCode= (event) => {
        setPostCode(event.target.value);
    }

    const handlePhone= (event) => {
        setPhone(event.target.value);
    }

    return (
        <form className="form-group">
            <h1>New contact</h1>
            <input type="text" className="form-control" placeholder="Name" value={name} onChange={handleName}></input>
            <input type="text" className="form-control" placeholder="Lastname" value={lastname} onChange={handleLastname}></input> 
            <input type="text" className="form-control" placeholder="Address" value={address} onChange={handleAddress}></input> 
            <input type="text" className="form-control" placeholder="Province" value={province} onChange={handleProvince}></input> 
            <input type="text" className="form-control" placeholder="Postcode" value={postCode} onChange={handlePostCode}></input> 
            <input type="text" className="form-control" placeholder="Phone" value={phone} onChange={handlePhone}></input> 
            <input type="submit" value="Add contact" className="btn btn-success"></input>         
        </form>
    )
}
