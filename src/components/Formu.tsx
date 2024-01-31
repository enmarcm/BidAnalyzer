import DragAndDrop from "./DragAndDrop.tsx";

const Formu = ({
  onSubmit,
}: {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  
  return (
    <form
      className="p-4 flex flex-col  justify-between h-full"
      onSubmit={onSubmit}
    >
      <label className="text-white flex flex-col gap-3 font-bold text-lg">
        Ingrese la llave privada
        <textarea
          name="privateKey"
          id="privateKey"
          className="rounded-md resize-none h-32 overflow-y-auto bg-inputs p-1"
        ></textarea>
      </label>

      <label className="h-[180px] box-border">
        <DragAndDrop nameFile="fileInput" />
      </label>

      <button className="w-full bg-resalt rounded-lg p-2 hover:opacity-55 font-bold">
        Enviar
      </button>
    </form>
  );
};

export default Formu;
