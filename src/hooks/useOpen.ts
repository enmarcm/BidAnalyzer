import { useState, useEffect } from "react";

export function useOpen({ content }: { content: String | null| Object | Array<String> }) {
  const [open, isOpen] = useState(false);
  useEffect(() => {
    if (!content) return;

    isOpen(true);
  }, [content]);

  return { open, isOpen };
}
