import { ColorsButton } from "./ColorsButton";
import { RoutesRouter } from "./RoutesRouter";

interface NavsButtonInterface {
  to: string;
  content: string;
  color?: ColorsButton;
}

export const NavObject: Array<NavsButtonInterface> = [
  {
    to: `/${RoutesRouter.LICITACIONES}`,
    color: ColorsButton.green,
    content: "Licitaciones Excel",
  },
  {
    to: `/${RoutesRouter.GENERATE_PAIR_KEYS}`,
    content: "Generar par de llaves",
  },
  {
    to: `/${RoutesRouter.GENERATE_CSR}`,
    content: "Generar CSR",
  },
  {
    to: `/${RoutesRouter.GENERATE_CERTIFICATE}`,
    content: "Generar Certificados",
  },
  {
    to: `/${RoutesRouter.ENCRYPT_PUBLIC_TEXT}`,
    content: "Cifrar texto con llave publica",
  },
  {
    to: `/${RoutesRouter.DECRYPT_PRIVATE_TEXT}`,
    content: "Decifrar texto con llave privada",
  },
];
