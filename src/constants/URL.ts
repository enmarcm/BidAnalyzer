export enum URL {
  URL_BASE = "https://localhost:7878",
  URL_DECRYPT = `${URL_BASE}/decifrate/fileExcel`,
  URL_GENERATE_PAIR_KEYS = `${URL_BASE}/generatePairKeys`,
  URL_GENERATE_CSR = `${URL_BASE}/SSL/obtainCSR`,
  URL_GENERATE_CERTIFICATE = `${URL_BASE}/SSL/obtainCertificate`,
  URL_ENCRYPT_TEXT = `${URL_BASE}/cifrate`,
  URL_DECRYPT_TEXT = `${URL_BASE}/decifrate`,
}
