import { useState, useRef } from "react";
import { useFiles } from "../hooks/useFiles";

const DragAndDrop = ({ nameFile }: { nameFile: string }) => {
  const { files, setFiles } = useFiles();
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    let files = Array.from(e.dataTransfer.files);
    setFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    let newFiles = Array.from(e.target.files);
    setFiles(newFiles);
  };

  return (
    <div
      className={`border-dashed border-2 w-full flex flex-col items-center justify-center h-full  ${
        dragging ? "border-red-500" : "border-blue-400"
      } p-4  rounded-md hover: cursor-pointer hover:opacity-55`}
      onDrop={handleDrop}
      onDragOver={handleDragEnter}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileInput}
        multiple
        name={nameFile}
        disabled={files.length > 0}
      />
      <p className="text-white text-center font-bold">
        Arrastra y suelta tus archivos aquí o pulsa para cargarlos
      </p>

      {files.length > 0 && (
        <div className="text-white mt-5 overflow-auto w-full text-center">
          <p className="my-4 font-bold">Los archivos cargados son:</p>
          {files.map((file, index) => (
            <div key={index}>
              <span>{file.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
