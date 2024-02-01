import { useState, useEffect } from "react";

export function useOpen({ content }: { content: String | null }) {
  const [open, isOpen] = useState(false);
  useEffect(() => {
    if (!content) return;

    isOpen(true);
  }, [content]);

  return { open, isOpen };
}
