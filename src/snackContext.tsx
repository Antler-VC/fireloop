import React, { useContext } from 'react';
import { ISnack } from './props/Snack';
import { EMPTY_STATE } from './constants/emptyState';
const DEFAULT_STATE = {
  ...EMPTY_STATE,
  isOpen: false,
  close: () => {},
  open: (props: ISnack) => {
    console.log(props);
  },
};
// Create our Context
export const SnackContext = React.createContext(DEFAULT_STATE);

export const useSnackContext = () => useContext(SnackContext);
