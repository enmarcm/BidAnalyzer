import { URL } from "../constants/URL.ts";
export async function formDataProcess({
  privateKey,
  files,
}: {
  privateKey: FormDataEntryValue | null;
  files: Array<File>;
}) {
  try {
    const newFormData = new FormData();
    newFormData.append("privateKey", privateKey as string);

    files.forEach((file) => {
      newFormData.append("files", file);
    });

    const response = await fetch(URL.URL_DECRYPT, {
      method: "POST",
      body: newFormData,
      mode: "cors",
    });

    const data = await response.json();
    const dataParsed = JSON.stringify(data);
    return dataParsed;
  } catch (error) {
    return `Ocurrio un error: ${error}`;
  }
}
