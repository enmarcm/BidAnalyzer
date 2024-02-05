import CopyToClipboard from "../components/CopyToClipboard";
import FormCSR from "../forms/FormCSR";
import { useCSR } from "../hooks/useCSR";


const GenerateCSR =  () => {
  const { csrContent, handleSubmit } = useCSR();
 
  return (
    <div className="w-full h-full flex flex-col box-border">
      <h1 className="text-3xl my-5 text-white font-bold text-center">
        Generar CSR
      </h1>

      {csrContent ? (
        <div className="w-full overflow-y-auto relative overflow-x-hidden h-full my-2 text-white">
          <CopyToClipboard text={csrContent} />
          {csrContent}
        </div>
      ) : (
        <FormCSR handleSubmit={handleSubmit}/>
      )}
    </div>
  );
};

export default GenerateCSR;
