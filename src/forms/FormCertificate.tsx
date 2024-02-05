import options from "../mocks/countries.json";
import days from "../mocks/days.json";
import LabelForm from "../components/LabelForm";

const FormCertificate = ({
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
        Ingrese el nombre de la empresa
        <input
          name="companyName"
          id="companyName"
          className="rounded-md overflow-y-auto bg-inputs p-1 text-sm font-light focus:outline-blue-400"
          type="text"
        />
      </LabelForm>

      <LabelForm>
        Ingrese el pais
        <select
          name="countryName"
          id="countryName"
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
          name="stateName"
          id="stateName"
          className="rounded-md overflow-y-auto bg-inputs p-1 text-sm font-light focus:outline-blue-400"
          type="text"
        />
      </LabelForm>
      <LabelForm>
        Ingrese la ciudad
        <input
          name="localityName"
          id="localityName"
          className="rounded-md overflow-y-auto bg-inputs p-1 text-sm font-light focus:outline-blue-400"
          type="text"
        />
      </LabelForm>
      <LabelForm>
        Ingrese la compañia
        <input
          name="organitationName"
          id="organitationName"
          className="rounded-md overflow-y-auto bg-inputs p-1 text-sm font-light focus:outline-blue-400"
          type="text"
        />
      </LabelForm>
      <LabelForm>
        Ingrese el correo
        <input
          name="email"
          id="email"
          className="rounded-md overflow-y-auto bg-inputs p-1 text-sm font-light focus:outline-blue-400"
          type="mail"
        />
      </LabelForm>
      <LabelForm>
        Ingrese los días que será valido
        <select
          name="days"
          id="days"
          className="rounded-md overflow-y-auto bg-inputs p-1 text-sm font-light focus:outline-blue-400"
        >
          {days.map((day) => {
            return (
              <option value={day.days} key={day.days}>
                {day.days}
              </option>
            );
          })}
        </select>
      </LabelForm>

      <LabelForm>
        Ingrese la llave privada
        <textarea
          name="privateKeyPem"
          id="privateKeyPem"
          className="rounded-md resize-none h-28 overflow-y-auto bg-inputs p-3 text-sm font-light focus:outline-blue-400 mb-2"
        ></textarea>
      </LabelForm>

      <LabelForm>
        Ingrese el certificado CSR
        <textarea
          name="csrPem"
          id="csrPem"
          className="rounded-md resize-none h-28 overflow-y-auto bg-inputs p-3 text-sm font-light focus:outline-blue-400 mb-2"
        ></textarea>
      </LabelForm>

      <button className="w-full bg-blue-400 rounded-lg p-2 hover:opacity-55 font-bold">
        Enviar
      </button>
    </form>
  );
};

export default FormCertificate;
