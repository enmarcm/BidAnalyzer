import Body from "./components/Body";
import Header from "./components/Header";
import "tailwindcss/tailwind.css";
import { useStatus } from "./hooks/useStatus";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";

function App() {
  const { content, setContent, setLoading } = useStatus();
  const [open, isOpen] = useState(false);

  useEffect(() => {
    if (!content) return;

    isOpen(true);
  }, [content]);

  const handleClose = () =>{
    setContent('')
    setLoading(false)
    isOpen(false)
  }

  return (
    <section className="w-full h-screen bg-primary flex flex-col items-center justify-center ">
      {open && <Modal setClose={handleClose}>{content}</Modal>}

      <div
        className={`min-w-[300px] w-[400px] h-full my-4 bg-white  shadow-xl grid grid-rows-layout rounded-lg ${( open) ? "blur-lg" : ""}`}
      >
        <Header />

        <Body />
      </div>
    </section>
  );
}

export default App;
