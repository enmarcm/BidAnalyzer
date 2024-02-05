import options from "../mocks/countries.json";
import LabelForm from "../components/LabelForm";

const FormCSR = ({
  handleSubmit,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form
      className="p-4 box-border flex flex-col  justify-between h-full"
      onSubmit={handleSubmit}
    >
      <LabelForm>
        Ingrese el nombre del dominio
        <input
          name="commonName"
          id="commonName"
          className="rounded-md overflow-y-auto bg-inputs p-1 text-sm font-light focus:outline-blue-400"
          type="text"
        />
      </LabelForm>

      <LabelForm>
        Ingrese el pais
        <select
          name="country"
          id="country"
          className="rounded-md overflow-y-auto bg-inputs p-1 text-sm font-light focus:outline-blue-400"
        >
          {options.map((country) => {
            return (
              <option value={country.country} key={country.country}>
                {country.countryName}
              </option>
            );
          })}
        </select>
      </LabelForm>

      <LabelForm>
        Ingrese el estado
        <input
          name="state"
          id="state"
          className="rounded-md overflow-y-auto bg-inputs p-1 text-sm font-light focus:outline-blue-400"
          type="text"
        />
      </LabelForm>
      <LabelForm>
        Ingrese la ciudad
        <input
          name="locality"
          id="locality"
          className="rounded-md overflow-y-auto bg-inputs p-1 text-sm font-light focus:outline-blue-400"
          type="text"
        />
      </LabelForm>
      <LabelForm>
        Ingrese la compañia
        <input
          name="organization"
          id="organization"
          className="rounded-md overflow-y-auto bg-inputs p-1 text-sm font-light focus:outline-blue-400"
          type="text"
        />
      </LabelForm>
      <LabelForm>
        Ingrese el departamento de la empresa
        <input
          name="organizationUnit"
          id="organizationUnit"
          className="rounded-md overflow-y-auto bg-inputs p-1 text-sm font-light focus:outline-blue-400"
          type="text"
        />
      </LabelForm>

      <LabelForm>
        Ingrese la llave privada
        <textarea
          name="privateKey"
          id="privateKey"
          className="rounded-md resize-none h-28 overflow-y-auto bg-inputs p-3 text-sm font-light focus:outline-blue-400 mb-2"
        ></textarea>
      </LabelForm>

      <button className="w-full bg-blue-400 rounded-lg p-2 hover:opacity-55 font-bold">
        Enviar
      </button>
    </form>
  );
};

export default FormCSR;
