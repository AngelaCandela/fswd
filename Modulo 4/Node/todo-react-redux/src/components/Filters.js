import React from "react";
import Link from "./Link";

const Filters = () => (
  <p>
    Show: <Link filter="SHOW_ALL">Todos</Link>
    <Link filter="SHOW_ACTIVE">Activo</Link>
    <Link filter="SHOW_COMPLETED">Completado</Link>
  </p>
);

export default Filters;
