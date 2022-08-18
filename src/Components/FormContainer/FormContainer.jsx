import { useEffect } from "react";
import useServices from "../../Hooks/useServices";
import useLocalStorage from "../../Hooks/useLocalStorage";
import ButtonForm from "../ButtonForm/ButtonForm";

const FormContainer = () => {
  const {
    servicios,
    setServicios,
    setServiciosFilter,
    servicio,
    setServicio,
    editServicio,
    setEditServicio,
  } = useServices();
  const [serviciosLocal, setServiciosLocal] = useLocalStorage('servicios',[]);
  const handleChange = (ev) => {
    setServicio((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleCancel = (ev) => {
    ev.preventDefault();
    setServicio({ name: "", description: "" });
    setEditServicio((prev) => ({ id: 0, edit: false }));
  };
  const handleSend = (ev) => {
    ev.preventDefault();
    if (editServicio.edit == true) {
      const servicioIndex = servicios.findIndex(
        (s, index) => index == editServicio.id
      );
      const newServicios = [...servicios];
      newServicios[servicioIndex] = servicio;
      console.log(newServicios);
      setServicios([...newServicios]);
      setServicio({ name: "", description: "" });
    } else {
      setServicios((prev) => [...prev, servicio]);
      setServicio({ name: "", description: "" });
    }
  };
  useEffect(()=>{
    setServicios([...serviciosLocal])
  },[])
  useEffect(() => {
    setServiciosFilter([...servicios]);
    setServiciosLocal([...servicios])
  }, [servicios]);

  return (
    <div className="h-2/5 md:h-80 border rounded-md">
      <form className="flex flex-col w-full h-full">
        <div className="h-4/5 flex flex-col gap-4 px-10">
          <h2 className="text-xl font-semibold py-3 md:py-2">Servicio</h2>
          <label htmlFor="name">Nombre</label>
          <input
            className="py-1 px-2 border rounded"
            onChange={handleChange}
            value={servicio.name}
            type="text"
            name="name"
            id="name"
          />
          <label htmlFor="description">Descripción</label>
          <input
            className="py-1 px-2 border rounded"
            onChange={handleChange}
            value={servicio.description}
            type="text"
            name="description"
            id="description"
          />
        </div>
        <div className="flex h-1/5 bg-slate-100">
          <div className="flex w-full items-center gap-3 px-10">
            <ButtonForm type="send" handleEvent={handleSend}>
              Grabar
            </ButtonForm>
            <ButtonForm type="cancel" handleEvent={handleCancel}>
              Cancelar
            </ButtonForm>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
