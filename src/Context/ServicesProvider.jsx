import { createContext, useState } from "react";

const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
  const [servicios, setServicios] = useState([]);
  const [serviciosFilter, setServiciosFilter] = useState([]);
  const [servicio, setServicio] = useState({
    name: "",
    description: "",
  });
  const [editServicio,setEditServicio] = useState({
    id:0,
    edit:false
  })

  return (
    <ServicesContext.Provider
      value={{
        servicios,
        setServicios,
        servicio,
        setServicio,
        editServicio,
        setEditServicio,
        serviciosFilter,
        setServiciosFilter
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export { ServicesProvider };

export default ServicesContext;
