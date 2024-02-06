import { useFiles } from "./useFiles";
import { useStatus } from "./useStatus";
import { formDataProcess } from "../services/formDataProcess";

export function useLicitaciones() {
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
   

    if (typeof result === "object" && result !== null && "error" in result) {
      return setContent(result.error);
    }
    const winners = result.success;

    const newWinners = {
      message: "Ha ganado",
      winners,
    };

    setContent(newWinners);
  };

  return { handleSubmit };
}
