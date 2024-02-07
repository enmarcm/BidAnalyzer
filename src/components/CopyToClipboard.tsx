import { useState } from "react";

const CopyToClipboard = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className={`flex items-center justify-center ${
        copied ? "bg-green-600" : "bg-blue-400"
      } text-white sticky  p-2 top-0  rounded hover:opacity-90 w-20`}
    >
      {copied ? "Copiado" : "Copiar"}
    </button>
  );
};

export default CopyToClipboard;
