import "tailwindcss/tailwind.css";
import Content from "./components/Content.tsx";
import Loader from "./components/Loader.tsx";
import { useStatus } from "./hooks/useStatus.ts";

function App() {
  const { loading } = useStatus();

  return (
    <>
      <section className="w-full h-screen bg-primary flex flex-col items-center justify-center bg-opacity-95">
        {loading && <Loader />}
        <Content />
      </section>
    </>
  );
}

export default App;
