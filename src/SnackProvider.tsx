import React, { useState } from 'react';
import { SnackContext } from './SnackContext';
import { EMPTY_STATE } from './constants/emptyState';
import { ISnack } from './props/Snack';
import Snack from './Snack';
interface ISnackProviderProps {
  children: React.ReactNode;
}

export const SnackProvider: React.FC<ISnackProviderProps> = ({ children }) => {
  const [state, setState] = useState({ ...EMPTY_STATE, isOpen: false });
  const close = () => {
    setState({ ...EMPTY_STATE, isOpen: false });
  };
  const open = (props: ISnack) => {
    setState({ ...props, isOpen: true });
  };
  return (
    <SnackContext.Provider
      value={{
        ...state,
        close,
        open,
      }}
    >
      {children}

      <Snack />
    </SnackContext.Provider>
  );
};
