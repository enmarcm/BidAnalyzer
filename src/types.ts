export type KeysType = {
  publicKey: string;
  privateKey: string;
};

type countryMinimal = `${string}${string}`;

export type GenerateCSRForm = {
  commonName: string;
  country: countryMinimal;
  state: string;
  locality: string;
  organization: string;
  organizationUnit: string;
  privateKey: string;
};

export type GenerateCertificateForm = {
  csrPem: string;
  privateKeyPem: string;
  companyName: string;
  countryName: countryMinimal;
  stateName: string;
  localityName: string;
  organitationName: string;
  days: number;
  email: string;
};

export type CifrateTextType = {
  publicKey: string;
  data: string;
};

export type DecrifrateTextType = {
  privateKey: string;
  data: string;
};

export type WinnerData = {
  name: string;
  minValue: number;
};

export type ModalProps = {
  children:
    | React.ReactNode
    | { message: string; winner: WinnerData }
    | { message: string; winners: WinnerData[] };
  setClose?: () => void;
};
