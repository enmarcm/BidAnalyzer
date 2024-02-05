import { useStatus } from "./useStatus";
import { useState } from "react";
import { CifrateTextType } from "../types";
import { jsonSend } from "../services/formDataProcess";
import { URL } from "../constants/URL";

export function useCifrateText() {
  const [cifrateContent, setCifrateContent] = useState<string | null>(null);
  const { setLoading, setContent } = useStatus();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const valores = Object.fromEntries(formData) as CifrateTextType;

    setLoading(true);
    const data = await jsonSend({ url: URL.URL_ENCRYPT_TEXT, obj: valores });
    setLoading(false);

    if (data.error) {
      setContent(data.error);
      setLoading(false);
    }

    setCifrateContent(data.data);
  };

  return { cifrateContent, handleSubmit };
}
