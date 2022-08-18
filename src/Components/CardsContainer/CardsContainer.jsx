import Card from "../Card/Card";
import useServices from "../../Hooks/useServices";

const CardsContainer = () => {
  const { serviciosFilter } = useServices();
  return (
    <div className="h-full w-full overflow-y-auto">
      {serviciosFilter.length === 0 && (
        <div className="w-full h-full bg-slate-100 flex justify-center items-center">
          <p className="text-4xl font-semibold">NO HAY SERVICIOS REGISTRADOS</p>
        </div>
      )}
      <div className="grid grid-cols-1 grid-flow-row gap-4 md:grid-cols-2 xl:grid-cols-3">
        {serviciosFilter.map((servicio, index) => (
          <Card key={`card-${index}-${servicio.name}`} servicio={servicio} id={index}/>
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
