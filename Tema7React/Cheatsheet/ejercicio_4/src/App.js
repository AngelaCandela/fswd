import './App.css';
import { useState } from "react";
import Agenda from "./components/Agenda";
import Formulario from "./components/Formulario";

function App() {

  const [contacts, setContacts] = useState([
    {name: "John", lastName: "Smith", address: "Calle Compositor", province: "Almería", postCode: "04008", phone: "648560349"},
    {name: "Sarah", lastName: "Donovan", address: "Calle Marqués de Larios", province: "Málaga", postCode: "29008", phone: "661284186"},
    {name: "Kate", lastName: "Doe", address: "Calle 2", province: "Madrid", postCode: "29630", phone: "611284133"},
  ]);

  return (
    <div>
      <Agenda contacts={contacts}/>
      <Formulario setContacts={setContacts}/>
    </div>
  );
}

export default App;
