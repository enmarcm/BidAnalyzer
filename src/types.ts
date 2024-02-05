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
