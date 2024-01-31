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
    <div className="rounded bg-opacity-65 w-2/4 bg-white border flex flex-col items-center justify-center gap-4 h-2/4 absolute z-50 p-5 sm:max-w-3/7 sm:h-1/2 ">
      <div className="flex flex-col">
        <p className="font-bold">Mensaje:</p>
        {children}
      </div>

      <button
        className="flex items-center justify-center w-32 h-8 bg-red-500 text-black font-bold hover:opacity-70"
        onClick={handleClick}
      >
        X
      </button>
    </div>
  );
};

export default Modal;
