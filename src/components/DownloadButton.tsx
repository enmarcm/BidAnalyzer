import { useState } from "react";
//@ts-ignore
import { saveAs } from "file-saver";

const DownloadButton = ({
  content,
  nameFile = "element.pem",
}: {
  content: string;
  nameFile?: string;
}) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, nameFile);
    setDownloaded(true);

    setTimeout(() => setDownloaded(false), 2000);
  };

  return (
    <button
      onClick={handleDownload}
      className={`flex items-center justify-center ${
        downloaded ? "bg-red-600" : "bg-yellow-900"
      } text-white sticky  p-2 top-0 left-3/4 rounded hover:opacity-90 w-20`}
    >
      {downloaded ? "Proceso" : "Descargar"}
    </button>
  );
};

export default DownloadButton;
