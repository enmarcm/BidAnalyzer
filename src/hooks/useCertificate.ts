import { useState } from "react";
import { GenerateCertificateForm } from "../types";
import { URL } from "../constants/URL";
import { jsonSend } from "../services/formDataProcess";
import { useStatus } from "./useStatus";

export function useCertificate() {
  const [certificateContent, setCertificateContent] = useState<string | null>(
    null
  );
  const { setLoading, setContent } = useStatus();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const valores = Object.fromEntries(
      formData
    ) as unknown as GenerateCertificateForm;

    const privateKeyMap = valores?.privateKeyPem.replace(/\r\n/g, "\n");
    const csrMap = valores?.csrPem.replace(/\r\n/g, "\n");

    const newValues: GenerateCertificateForm = {
      ...valores,
      privateKeyPem: privateKeyMap,
      csrPem: csrMap,
    };

    setLoading(true);
    const data = await jsonSend({
      url: URL.URL_GENERATE_CERTIFICATE,
      obj: newValues,
    });
    const dataJson = JSON.parse(data);

    if (dataJson.error) {
      setContent(dataJson.error);
      setLoading(false);
    }

    const dataMapped = dataJson.success.replace(/\r\n\g/, "\n");
    setLoading(false);

    setCertificateContent(dataMapped);
  };

  return { certificateContent, handleSubmit };
}
