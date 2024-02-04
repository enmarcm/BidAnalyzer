import "tailwindcss/tailwind.css";
import Content from "./components/Content.tsx";

function App() {
  return (
    <section className="w-full h-screen bg-primary flex flex-col items-center justify-center bg-opacity-95">
      <>
        <Content />
      </>
    </section>
  );
}

export default App;
