import { URL } from "../constants/URL.ts";

export async function formDataProcess({
  privateKey,
  files,
}: {
  privateKey: FormDataEntryValue | null;
  files: Array<File>;
}) {
  try {
    if (!files || files.length === 0) {
      return { error: "No hay archivos a enviar" };
    }

    const newFormData = new FormData();
    newFormData.append("privateKey", privateKey as string);

    files.forEach((file) => {
      newFormData.append("files", file);
    });

    const data = await formDataSend({
      url: URL.URL_DECRYPT,
      formData: newFormData,
    });

    return data;
  } catch (error) {
    return { error: `Ocurrio un error: ${error}` };
  }
}

export async function formDataSend({
  url,
  formData,
}: {
  url: string;
  formData: FormData;
}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      mode: "cors",
    });

    const data = await response.json();

    console.log(data)
    return data;
  } catch (error) {
    return { error: `Ocurrio un error: ${error}` };
  }
}

export async function jsonSend({ url, obj }: { url: string; obj: any }) {
  try {
    const dato = JSON.stringify(obj);
    const response = await fetch(url, {
      method: "POST",
      body: dato,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Server responded with status code ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return JSON.stringify({ error: `Ocurrio un error: ${error}` });
  }
}
