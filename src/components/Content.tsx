import { Route, Routes } from "react-router-dom";
import { RoutesRouter } from "../constants/RoutesRouter";
import Licitaciones from "../pages/Licitaciones";
import GenerateKeys from "../pages/GenerateKeys.tsx";
import Main from "../pages/Main.tsx";
import { useStatus } from "../hooks/useStatus.ts";
import { useOpen } from "../hooks/useOpen.ts";
import { useCloseModal } from "../hooks/useCloseModal.ts";
import Loader from "./Loader.tsx";
import Modal from "./Modal.tsx";


const Content = () => {
  const { content, loading } = useStatus();
  const { open, isOpen } = useOpen({ content });
  const { handleClose } = useCloseModal({ isOpen });
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {open && <Modal setClose={handleClose}>{content}</Modal>}

          <div
            className={`${
              open ? "blur-lg pointer-events-none" : ""
            } min-w-[300px] w-[400px] h-full`}
          >
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path={`/${RoutesRouter.LICITACIONES}`}
                element={<Licitaciones />}
              />
              <Route
                path={`/${RoutesRouter.GENERATE_PAIR_KEYS}`}
                element={<GenerateKeys />}
              />
              <Route
                path={`/${RoutesRouter.GENERATE_CSR}`}
                element={<button></button>}
              />
              <Route
                path={`/${RoutesRouter.GENERATE_CERTIFICATE}`}
                element={<button></button>}
              />
              <Route
                path={`/${RoutesRouter.ENCRYPT_PUBLIC_FILE}`}
                element={<button></button>}
              />
              <Route
                path={`/${RoutesRouter.DECRYPT_PRIVATE_FILE}`}
                element={<button></button>}
              />
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

export default Content;
