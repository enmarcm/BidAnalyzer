import Formu from "./FormuLicitaciones.tsx";
import { useFiles } from "../hooks/useFiles.ts";
import { useStatus } from "../hooks/useStatus.ts";
import { formDataProcess } from "../services/formDataProcess.ts";

const BodyLicitaciones = () => {
  const { files } = useFiles();
  const { setLoading, setContent } = useStatus();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const privateKeyGet = formData.get("privateKey");
    const privateKey = privateKeyGet ? privateKeyGet : null;

    setLoading(true);
    const result = await formDataProcess({ privateKey, files });
    setLoading(false);

    setContent(result);
  };

  return (
    <div className=" rounded-b-lg rounded-t-2xl m-1">
      <Formu onSubmit={handleSubmit} />
    </div>
  );
};

export default BodyLicitaciones;
