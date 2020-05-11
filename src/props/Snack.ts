import { SnackbarOrigin } from '@material-ui/core/Snackbar';

export interface ISnack {
  message: string;
  duration?: undefined | number;
  action?: undefined | JSX.Element;
  severity?: 'success' | 'info' | 'warning' | 'error' | undefined;
  position?: SnackbarOrigin | undefined;
}
