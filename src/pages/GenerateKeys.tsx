import { useKeys } from "../hooks/useKeys";
import ButtonsActions from "../components/ButtonsActions";

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-5 text-lg text-center font-bold ">{children}</h2>
);

const ContentKey = ({ children }: { children: React.ReactNode }) => (
  <div className="relative overflow-y-auto overflow-x-hidden max-h-72 text-wrap w-full h-full">
    {children}
  </div>
);


const GenerateKeys = () => {
  const { keys } = useKeys();

  return (
    <div className="text-white h-full grid grid-rows-2 grid-cols-1 w-full p-8 gap-8">
      <div className="h-full">
        <SubTitle>Llave privada</SubTitle>
        <ContentKey>
          <ButtonsActions text={keys?.privateKey} />
          {keys?.privateKey}
        </ContentKey>
      </div>
      <div className="h-full">
        <SubTitle>Llave publica</SubTitle>
        <ContentKey>
          <ButtonsActions text={keys?.publicKey} />
          {keys?.publicKey}
        </ContentKey>
      </div>
    </div>
  );
};

export default GenerateKeys;
