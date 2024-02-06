import { WinnerData, ModalProps } from "../types";
//@ts-ignore
import confetti from "canvas-confetti";

const Modal = ({ children, setClose }: ModalProps) => {
  const handleClick = () => setClose?.();

  const renderWinner = (winner: WinnerData, index: number) => (
    <div key={index}>
      <div>Archivo: {winner.name}</div>
      <div>Precio: {winner.minValue}</div>
    </div>
  );

  const renderChildren = (): React.ReactNode => {
    if (
      typeof children === "object" &&
      children !== null &&
      "message" in children
    ) {
      const { message, winner, winners } = children as {
        message: string;
        winner?: WinnerData;
        winners?: WinnerData[];
      };
      if (winner || winners) {
        confetti();
      }
      return (
        <>
          <div>{message}</div>
          {winner && renderWinner(winner, 0)}
          {winners && winners.map(renderWinner)}
        </>
      );
    }

    return children as React.ReactNode;
  };

  return (
    <div className="max-w-sm rounded-lg bg-opacity-65 bg-gray-700 flex p-16 flex-col items-center justify-between gap-4 h-2/4 absolute z-50 sm:h-1/2 sm:w-2/3 ">
      <div className="flex flex-col text-white w-full text-wrap overflow-auto">
        {renderChildren()}
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
