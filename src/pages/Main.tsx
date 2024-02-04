import NavButton from "../components/NavButton";
import { RoutesRouter } from "../constants/RoutesRouter";

const Main = () => {
  return (
    <>
      <div className="flex flex-col gap-5 text-white h-full items-center justify-center">
        <h1 className="text-3xl font-bold my-4">Crypto Manager</h1>
        <NavButton to={`/${RoutesRouter.LICITACIONES}`}>
          Licitaciones Excel
        </NavButton>
        <NavButton to={`/${RoutesRouter.GENERATE_PAIR_KEYS}`}>
          Generar par de llaves
        </NavButton>
        <NavButton to={`/${RoutesRouter.GENERATE_CSR}`}>Generar CSR</NavButton>
        <NavButton to={`/${RoutesRouter.GENERATE_CERTIFICATE}`}>
          Generar Certificados
        </NavButton>
        <NavButton to={`/${RoutesRouter.ENCRYPT_PUBLIC_FILE}`}>
          Cifrar con llave publica
        </NavButton>
        <NavButton to={`/${RoutesRouter.DECRYPT_PRIVATE_FILE}`}>
          Descifrar archivo
        </NavButton>
      </div>
    </>
  );
};

export default Main;
