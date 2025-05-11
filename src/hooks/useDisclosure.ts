import { useState, useEffect } from "react";

interface UseDisclosureOptions {
  onOpen?: () => void;
  onClose?: () => void;
}

export const useDisclosure = (
  initialState = false,
  { onOpen, onClose }: UseDisclosureOptions = {}
) => {
  const [isOpen, setIsOpen] = useState(initialState);
  
  // Обновляем состояние при изменении initialState
  useEffect(() => {
    setIsOpen(initialState);
  }, [initialState]);
  
  // Функция открытия с вызовом колбэка
  const open = () => {
    setIsOpen(true);
    if (onOpen) {
      onOpen();
    }
  };
  
  // Функция закрытия с вызовом колбэка
  const close = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };
  
  // Функция переключения с вызовом соответствующего колбэка
  const toggle = () => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  };
  
  return { isOpen, open, close, toggle };
};