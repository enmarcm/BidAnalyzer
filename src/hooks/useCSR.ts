import { GenerateCSRForm } from "../types";
import { useStatus } from "./useStatus";
import { useState } from "react";
import { URL } from "../constants/URL";
import { jsonSend } from "../services/formDataProcess";


export function useCSR(){
    const { setLoading, setContent } = useStatus();
    const [csrContent, setCsrContent] = useState<string | null>(null);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
  
      const valores = Object.fromEntries(formData) as GenerateCSRForm;
  
      const privateKeyMap = valores?.privateKey.replace(/\n/g, "\\n");
  
      const newValues: GenerateCSRForm = {
        ...valores,
        privateKey: privateKeyMap,
      };
  
      setLoading(true);
      const data = await jsonSend({ url: URL.URL_GENERATE_CSR, obj: newValues });
      const dataJson = JSON.parse(data)
  
      if(dataJson.error){
        setContent(dataJson.error)
        setLoading(false)
      }
      
      const dataMapped = dataJson.success.replace(/\r\n\g/, "\n")
      setLoading(false);
  
      setCsrContent(dataMapped);
    };
  
    return {handleSubmit, csrContent}
  }