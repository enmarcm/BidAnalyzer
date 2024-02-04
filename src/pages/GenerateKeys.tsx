import { useEffect, useState } from "react";
import { URL } from "../constants/URL";
import { useStatus } from "../hooks/useStatus";

type KeysType = {
  publicKey: string;
  privateKey: string;
};

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-5 text-lg text-center font-bold">{children}</h2>
);

const ContentKey = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-y-auto max-h-72 text-wrap w-full">{children}</div>
);

const GenerateKeys = () => {
  const {setLoading} = useStatus()

  const [keys, setKeys] = useState<KeysType>({
    publicKey: "",
    privateKey: "",
  });
  useEffect(() => {
    const peticion = async () => {
      setLoading(true)
      const result = await fetch(URL.URL_GENERATE_PAIR_KEYS);
      const data = await result.json();

      if (!data?.publicKey || !data?.privateKey)
      throw new Error("No se genero el par de llaves");
    
    const obj: KeysType = {
      publicKey: data.publicKey,
      privateKey: data.privateKey,
    };
    
    setLoading(false)
    setKeys(obj);
    };

    peticion();
  }, []);

  return (
    <div className="text-white h-full grid grid-rows-2 grid-cols-1 w-full p-8">
      <div>
        <SubTitle>Llave privada</SubTitle>
        <ContentKey>{keys?.privateKey}</ContentKey>
      </div>
      <div>
        <SubTitle>Llave publica</SubTitle>
        <ContentKey>{keys?.publicKey}</ContentKey>
      </div>
    </div>
  );
};

export default GenerateKeys;
