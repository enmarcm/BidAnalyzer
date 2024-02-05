import { Route, Routes } from "react-router-dom";
import { RoutesRouter } from "../constants/RoutesRouter";
import Main from "./Main";
import Licitaciones from "./Licitaciones";
import GenerateKeys from "./GenerateKeys";
import GenerateCSR from "./GenerateCSR";
import GenerateCertificate from "./GenerateCertificate";

const RoutesComponent = () => {
  return (
    <>
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
          element={<GenerateCSR />}
        />
        <Route
          path={`/${RoutesRouter.GENERATE_CERTIFICATE}`}
          element={<GenerateCertificate />}
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
    </>
  );
};

export default RoutesComponent;
