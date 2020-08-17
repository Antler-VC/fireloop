import React, { useContext, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { SnackContext } from './SnackContext';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function Snack() {
  const snackContext = useContext(SnackContext);

  const {
    position = { vertical: 'bottom', horizontal: 'center' },
    isOpen,
    close,
    message,
    duration = 5000,
    action = null,
    severity = 'info',
  } = snackContext;

  useEffect(() => {
    if (isOpen) setTimeout(close, duration);
  }, [isOpen]);
  return (
    <Snackbar
      anchorOrigin={{
        vertical: position.vertical as 'top' | 'bottom',
        horizontal: position.horizontal as 'left' | 'center' | 'right',
      }}
      key={message}
      open={isOpen}
    >
      <Alert onClose={close} action={action} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
