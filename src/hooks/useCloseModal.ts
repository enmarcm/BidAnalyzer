import { useStatus } from "./useStatus";

export const useCloseModal = ({
  isOpen,
}: {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setContent, setLoading } = useStatus();

  const handleClose = () => {
    setContent("");
    setLoading(false);
    isOpen(false);
  };

  return { handleClose };
};
