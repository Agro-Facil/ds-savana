import { CircleAlert, CircleCheck, CircleX, Info } from 'lucide-react-native';
import React, { createContext, useContext, useState, useMemo, PropsWithChildren, useCallback } from 'react';
import { View, Text } from 'react-native';
import { ToastStyles } from './styles';
import { ITheme } from '../../provider';

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
  id: number;
  message: string;
  type?: ToastType;
  duration?: number;
}

interface ToastProps {
  theme: ITheme
}

interface ToastOptions {
  type?: ToastType;
  duration?: number;
}

export interface ToastContextType {
  addToast: (message: string, options?: ToastOptions) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  return context as ToastContextType;
};

export const ToastProvider = ({ children, theme }: PropsWithChildren<ToastProps>) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const styles = ToastStyles(theme);

  const addToast = useCallback((message: string, options: ToastOptions = {}) => {
    const id = Math.floor(Math.random() * 10000);
    const toast = { id, message, ...options };
    setToasts((prevToasts) => [...prevToasts, toast]);
    setTimeout(() => removeToast(id), options.duration ?? 2000);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const memoizedValue = useMemo(() => ({ addToast, removeToast }), [addToast, removeToast]);

  return (
    <ToastContext.Provider value={memoizedValue}>
      <View style={styles.container}>
        {toasts.map((toast, index) => (
          <View
            key={toast.id}
            style={[
              styles.toast,
              styles[`toast-${toast.type ?? 'success'}`],
              { top: index * 80 }
            ]}
          >
            {toast.type === 'success' && (
              <CircleCheck fontSize='large' color={theme.colors.white} />
            )}
            {toast.type === 'error' && (
              <CircleX fontSize='large' color={theme.colors.white} />
            )}
            {toast.type === 'warning' && (
              <CircleAlert fontSize='large' color={theme.colors.white} />
            )}
            {toast.type === 'info' && (
              <Info fontSize='large' color={theme.colors.white} />
            )}
            <Text style={styles.text}>
              {toast?.message}
            </Text>
          </View>
        ))}
      </View>
      {children}
    </ToastContext.Provider>
  );
};

export default useToast;
