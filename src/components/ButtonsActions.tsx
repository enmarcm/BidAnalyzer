import CopyToClipboard from "./CopyToClipboard";
import DownloadButton from "./DownloadButton";

const ButtonsActions = ({ text }: { text: string }) => {
  return (
    <div className="flex">
      <CopyToClipboard text={text} />
      <DownloadButton content={text} />
    </div>
  );
};

export default ButtonsActions;
