import { useStatus } from "./useStatus";
import { useFiles } from "./useFiles";

export const useCloseModal = ({
  isOpen,
}: {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setContent, setLoading } = useStatus();
  const { setFiles } = useFiles();

  const handleClose = () => {
    setContent("");
    setLoading(false);
    isOpen(false);
    setFiles([]);
  };

  return { handleClose };
};
