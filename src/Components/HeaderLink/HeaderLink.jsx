import { useState, useEffect } from "react";
import useServices from "../../Hooks/useServices";
const HeaderLink = ({ name, setName, children }) => {
  const { servicios, setServiciosFilter } = useServices();
  const [select, setSelect] = useState(false);
  const voidChange = (nameFilter) => {
    nameFilter == name ? setSelect(true) : setSelect(false);
  };

  const filterServicios = (nameFilter) => {
    if (name !== "todos") {
      if (nameFilter == name) {
        console.log(name);
        const serviciosFilter = servicios.filter((servicio) =>
          servicio.name.toLowerCase().includes(name.toLowerCase())
        );
        console.log(serviciosFilter);
        setServiciosFilter([...serviciosFilter])
      }
    } else {
      setServiciosFilter([...servicios]);
    }
  };

  const handleClick = () => {
    const nameFilter = children.toLowerCase();
    setName(nameFilter);
    voidChange(nameFilter);
  };
  useEffect(() => {
    const nameFilter = children.toLowerCase();
    voidChange(nameFilter);
    filterServicios(nameFilter);
  }, [name]);
  return (
    <p
      onClick={handleClick}
      className={`text-base cursor-pointer ${
        select ? "font-semibold" : "font-normal"
      }`}
    >
      {children}
    </p>
  );
};

export default HeaderLink;
