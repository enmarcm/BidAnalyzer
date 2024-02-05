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
