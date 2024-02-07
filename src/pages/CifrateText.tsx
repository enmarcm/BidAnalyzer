import ButtonsActions from "../components/ButtonsActions";
import FormCifrateText from "../forms/FormCifrateText";

import { useCifrateText } from "../hooks/useCifrateText";

const CifrateText = () => {
  const { cifrateContent, handleSubmit } = useCifrateText();
  return (
    <div className="w-full h-full flex flex-col box-border">
      <h1 className="text-3xl my-5 text-white font-bold text-center">
        Cifrar texto con llave pública
      </h1>

      {cifrateContent ? (
        <div className="w-full overflow-y-auto relative overflow-x-auto h-full my-2 text-white text-wrap flex-wrap">
          <ButtonsActions text={cifrateContent} />
          {cifrateContent}
        </div>
      ) : (
        <FormCifrateText handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default CifrateText;
