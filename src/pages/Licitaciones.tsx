import Header from "../components/Header.tsx";
import Body from "../components/BodyLicitaciones.tsx";

const Licitaciones = () => {
  return (
    <>
      <div
        className={`w-full h-full shadow-md grid grid-rows-layout rounded-lg`}
      >
        <Header />

        <Body />
      </div>
    </>
  );
};

export default Licitaciones;
