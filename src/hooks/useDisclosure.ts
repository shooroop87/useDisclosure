import { useState, useEffect, useCallback } from "react";

interface UseDisclosureOptions {
  onOpen?: () => void;
  onClose?: () => void;
}

export const useDisclosure = (
  initialState = false,
  { onOpen, onClose }: UseDisclosureOptions = {}
) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    isOpen ? onOpen?.() : onClose?.();
  }, [isOpen, onOpen, onClose]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return { isOpen, toggle, open, close };
};
