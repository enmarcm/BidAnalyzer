import LabelForm from "../components/LabelForm";

const FormCifrateText = ({
  handleSubmit,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      className="p-4 box-border flex flex-col justify-between h-full overflow-y-auto"
      onSubmit={handleSubmit}
    >
      <LabelForm>
        Ingrese la llave publica
        <textarea
          name="publicKey"
          id="publicKey"
          className="rounded-md resize-none h-28 overflow-y-auto bg-inputs p-3 text-sm font-light focus:outline-blue-400 mb-2"
        ></textarea>
      </LabelForm>
      <LabelForm>
        Ingrese la data a cifrar
        <textarea
          name="data"
          id="data"
          className="rounded-md resize-none h-28 overflow-y-auto bg-inputs p-3 text-sm font-light focus:outline-blue-400 mb-2"
        ></textarea>
      </LabelForm>

      <button className="w-full bg-blue-400 rounded-lg p-2 hover:opacity-55 font-bold">
        Enviar
      </button>
    </form>
  );
};

export default FormCifrateText;
