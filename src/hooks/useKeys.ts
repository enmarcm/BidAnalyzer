import { useState, useEffect } from "react";
import { useStatus } from "./useStatus";
import { KeysType } from "../types";
import { URL } from "../constants/URL";

export function useKeys() {
  const { setLoading, setContent } = useStatus();

  const [keys, setKeys] = useState<KeysType>({
    publicKey: "",
    privateKey: "",
  });

  useEffect(() => {
    const peticion = async () => {
      try {
        setLoading(true);
        const result = await fetch(URL.URL_GENERATE_PAIR_KEYS);
        const data = await result.json();

        if (!data?.publicKey || !data?.privateKey) {
          setLoading(false);
          return "No se genero el par de llaves";
        }

        const obj: KeysType = {
          publicKey: data.publicKey,
          privateKey: data.privateKey,
        };

        setKeys(obj);
      } catch (error) {
        setContent(String(error));
        return;
      } finally {
        setLoading(false);
      }
    };

    peticion();
  }, []);

  return { keys };
}
