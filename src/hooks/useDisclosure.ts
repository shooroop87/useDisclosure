import { useState, useEffect, useCallback } from 'react';

interface UseDisclosureOptions {
  onOpen?: () => void;
  onClose?: () => void;
}

/**
 * Кастомный хук для управления состоянием отображения/скрытия контента
 * @param initialState Начальное состояние (true = открыто, false = закрыто)
 * @param options Объект с опциональными колбэками для событий открытия и закрытия
 * @returns Объект с состоянием isOpen и функциями toggle, open и close
 */
export const useDisclosure = (
  initialState: boolean = false,
  { onOpen, onClose }: UseDisclosureOptions = {}
) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // Обновляем состояние, если изменилось значение initialState (например, из пропсов)
  useEffect(() => {
    setIsOpen(initialState);
  }, [initialState]);

  // Функция открытия
  const open = useCallback(() => {
    setIsOpen(true);
    if (onOpen) onOpen();
  }, [onOpen]);

  // Функция закрытия
  const close = useCallback(() => {
    setIsOpen(false);
    if (onClose) onClose();
  }, [onClose]);

  // Функция переключения
  const toggle = useCallback(() => {
    setIsOpen(prevState => {
      const newState = !prevState;
      if (newState && onOpen) {
        onOpen();
      } else if (!newState && onClose) {
        onClose();
      }
      return newState;
    });
  }, [onOpen, onClose]);

  return { isOpen, toggle, open, close };
};