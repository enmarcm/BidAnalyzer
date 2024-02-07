import { useState } from "react";
import LabelForm from "../components/LabelForm";
import { useStatus } from "../hooks/useStatus";
import { DecrifrateTextType } from "../types";
import { jsonSend } from "../services/formDataProcess";
import { URL } from "../constants/URL";
import ButtonsActions from "../components/ButtonsActions";

const DecryptText = () => {
  const [decifrateContent, setDecifrateContent] = useState();
  const { setLoading, setContent } = useStatus();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const valores = Object.fromEntries(formData) as DecrifrateTextType;

    setLoading(true);
    const data = await jsonSend({ url: URL.URL_DECRYPT_TEXT, obj: valores });
    setLoading(false);

    if (data.error) {
      setContent(data.error);
      setLoading(false);
    }

    setDecifrateContent(data.data);
  };
  return (
    <div className="w-full h-full flex flex-col box-border">
      <h1 className="text-3xl my-5 text-white font-bold text-center">
        Decifrar texto con llave privada
      </h1>

      {decifrateContent ? (
        <div className="w-full overflow-y-auto relative overflow-x-auto h-full my-2 text-white text-wrap flex-wrap">
          <ButtonsActions text={decifrateContent} />
          {decifrateContent}
        </div>
      ) : (
        <form
          className="p-4 box-border flex flex-col justify-between h-full overflow-y-auto"
          onSubmit={handleSubmit}
        >
          <LabelForm>
            Ingrese la llave privada
            <textarea
              name="privateKey"
              id="privateKey"
              className="rounded-md resize-none h-28 overflow-y-auto bg-inputs p-3 text-sm font-light focus:outline-blue-400 mb-2"
            ></textarea>
          </LabelForm>
          <LabelForm>
            Ingrese la data a decifrar
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
      )}
    </div>
  );
};

export default DecryptText;
