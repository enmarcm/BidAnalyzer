import FormCertificate from "../forms/FormCertificate";
import { useCertificate } from "../hooks/useCertificate";
import ButtonsActions from "../components/ButtonsActions";

const GenerateCertificate = () => {
  const { certificateContent, handleSubmit } = useCertificate();

  return (
    <div className="w-full h-full flex flex-col box-border">
      <h1 className="text-3xl my-5 text-white font-bold text-center">
        Generar CSR
      </h1>

      {certificateContent ? (
        <div className="w-full overflow-y-auto relative overflow-x-hidden h-full my-2 text-white">
          <ButtonsActions text={certificateContent} />
          {certificateContent}
        </div>
      ) : (
        <FormCertificate handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default GenerateCertificate;
