import './Ejercicio_3.css';
import { useState } from "react";
import Agenda from "../components/Agenda";
import Formulario from "../components/Formulario";

function Ejercicio_3() {

  const [contacts, setContacts] = useState([
    {name: "John", lastName: "Smith", address: "Calle Compositor Lehmberg Ruiz", province: "Almería", postcode: "04008", phone: "648560349"},
    {name: "Sarah", lastName: "Donovan", address: "Calle Marqués de Larios", province: "Málaga", postcode: "29008", phone: "661284186"},
    {name: "Kate", lastName: "Doe", address: "Calle 2", province: "Madrid", postcode: "29630", phone: "611284133"},
  ]);

  return (
    <div className="container">
      <Agenda contacts={contacts} setContacts={setContacts}/>
      <Formulario setContacts={setContacts}/>
    </div>
  );
}

export default Ejercicio_3;
