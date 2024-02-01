const Modal = ({
  children,
  setClose,
}: {
  children: React.ReactNode;
  setClose?: () => void;
}) => {
  const handleClick = () => {
    if (!setClose) return;
    setClose();
  };

  return (
    <div className=" md:w-1/3 rounded-lg bg-opacity-65 bg-gray-700 flex p-16 flex-col items-center justify-between gap-4 h-2/4 absolute z-50 sm:h-1/2 sm:w-2/3 ">
      <div className="flex flex-col text-white">
        <p className="font-bold ">Mensaje:</p>
        {children}
      </div>

      <button
        className="rounded flex items-center justify-center w-full h-8 bg-red-500 text-white font-bold hover:opacity-70 hover:text-black backdrop-blur-lg"
        onClick={handleClick}
      >
        Cerrar
      </button>
    </div>
  );
};

export default Modal;
