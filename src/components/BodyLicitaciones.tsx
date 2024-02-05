import Formu from "../forms/FormuLicitaciones.tsx";
import { useLicitaciones } from "../hooks/useLicitaciones.ts";

const BodyLicitaciones = () => {
  const {handleSubmit} = useLicitaciones()

  return (
    <div className=" rounded-b-lg rounded-t-2xl m-1">
      <Formu onSubmit={handleSubmit} />
    </div>
  );
};

export default BodyLicitaciones;
