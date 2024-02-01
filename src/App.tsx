import Body from "./components/Body";
import Header from "./components/Header";
import "tailwindcss/tailwind.css";
import { useStatus } from "./hooks/useStatus";
import { useOpen } from "./hooks/useOpen";
import Modal from "./components/Modal";
import Loader from "./components/Loader";
import { useCloseModal } from "./hooks/useCloseModal.ts";

function App() {
  const { content, loading } = useStatus();
  const { open, isOpen } = useOpen({ content });
  const { handleClose } = useCloseModal({ isOpen });

  return (
    <section className="w-full h-screen bg-primary flex flex-col items-center justify-center bg-opacity-95">
      {loading ? (
        <Loader />
      ) : (
        <>
          {open && <Modal setClose={handleClose}>{content}</Modal>}

          <div
            className={`min-w-[300px] w-[400px] h-full my-4  shadow-md grid grid-rows-layout rounded-lg ${
              open ? "blur-lg" : ""
            }`}
          >
            <Header />

            <Body />
          </div>
        </>
      )}
    </section>
  );
}

export default App;
