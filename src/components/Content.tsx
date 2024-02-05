import RoutesComponent from "../pages/Routes.tsx";
import { useStatus } from "../hooks/useStatus.ts";
import { useOpen } from "../hooks/useOpen.ts";
import { useCloseModal } from "../hooks/useCloseModal.ts";
import Modal from "./Modal.tsx";

const Content = () => {
  const { content } = useStatus();
  const { open, isOpen } = useOpen({ content });
  const { handleClose } = useCloseModal({ isOpen });

  return (
    <>
      {open && <Modal setClose={handleClose}>{content}</Modal>}

      <div
        className={`${
          open ? "blur-lg pointer-events-none" : ""
        } min-w-[300px] w-[400px] h-full`}
      >
        <RoutesComponent />
      </div>
    </>
  );
};

export default Content;
