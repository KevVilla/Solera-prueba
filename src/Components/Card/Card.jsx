import useServices from "../../Hooks/useServices";

const Card = ({ servicio, id }) => {
  const { setServicio, servicios, setServicios, setEditServicio } = useServices();
  const handleEdit = () => {
    setEditServicio({
      id,
      edit: true,
    });
    console.log(servicio);
    setServicio((prev) => ({
      ...prev,
      name: servicio.name,
      description: servicio.description,
    }));
    console.log("editar", id);
  };
  const handleDelete = () => {
    console.log("eliminar", id);
    let newServicios = [...servicios];
    newServicios.splice(id,1)
    setServicios([...newServicios])
  };

  return (
    <div className="flex flex-col w-full h-56 md:h-52 border rounded">
      <div className="flex flex-col gap-2 h-4/5 px-3">
        <h2 className="text-xl font-semibold py-3 md:py-2">{servicio.name}</h2>
        <p className="text-sm py-3">{servicio.description}</p>
      </div>
      <div className="flex items-center gap-5 h-1/5 bg-slate-100 px-3">
        <p className="text-blue-600 cursor-pointer" onClick={handleEdit}>
          Editar
        </p>
        <p className="text-blue-600 cursor-pointer" onClick={handleDelete}>
          Eliminar
        </p>
      </div>
    </div>
  );
};

export default Card;
