import React, { useContext, useState } from 'react';
import Snack from './Snack';
import { ISnack } from './props/Snack';
import { EMPTY_STATE } from './constants/emptyState';
const DEFAULT_STATE = {
  ...EMPTY_STATE,
  isOpen: false,
  close: () => {},
  open: (props: ISnack) => {},
};
// Create our Context
export const SnackContext = React.createContext(DEFAULT_STATE);

export const useSnackContext = () => useContext(SnackContext);
