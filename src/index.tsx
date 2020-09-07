import React from 'react';

import {
  createStyles,
  makeStyles,
  Fab,
  Popover,
  Tooltip,
  Typography,
} from '@material-ui/core';
import FeedbackIcon from '@material-ui/icons/FeedbackRounded';

import Form, { Values } from '@antlerengineering/form-builder';
import { feedbackForm } from './form';
const makeUserSnapshot = ({
  displayName,
  email,
  uid,
  emailVerified,
  isAnonymous,
  photoURL,
}: {
  displayName: string | null;
  email: string | null;
  uid: string | null;
  emailVerified: boolean;
  isAnonymous: boolean;
  photoURL: string | null;
}) => ({
  timestamp: new Date(),
  displayName,
  email,
  uid,
  emailVerified,
  isAnonymous,
  photoURL,
});

const useStyles = makeStyles((theme: any) =>
  createStyles({
    fab: {
      position: 'fixed',
      right: 20,
      bottom: 20,
    },

    paper: {
      maxWidth: 360,
      width: `calc(100% - ${theme.spacing(4)}px)`,
      padding: theme.spacing(3),
    },

    submitButton: {
      margin: `${theme.spacing(4)}px auto ${theme.spacing(2)}px`,
      display: 'flex',
    },
  })
);

export default function Feedback({
  collectionRef,
  auth,
  diagnostics = null,
}: {
  collectionRef: any;
  //  firebase.firestore.CollectionReference<
  //   firebase.firestore.DocumentData
  // >;
  auth: any;
  //firebase.auth.Auth;
  diagnostics: any;
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSubmit = (values: Values) => {
    collectionRef.add({
      ...values,
      diagnostics,
      user: auth.currentUser ? makeUserSnapshot(auth.currentUser || {}) : null,
      email: auth.currentUser?.email ?? '',
      createdAt: new Date(),
      source: window.location.origin,
      pagePath: window.location.pathname,
    });
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Tooltip title="Send your feedback">
        <Fab
          onClick={handleClick}
          className={classes.fab}
          aria-label="feedback"
          color="primary"
        >
          <FeedbackIcon />
        </Fab>
      </Tooltip>

      <Popover
        id={id}
        classes={{ paper: classes.paper }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <Typography variant="h6" paragraph color="textSecondary">
          Submit Feedback
        </Typography>
        <Form
          fields={feedbackForm()}
          values={{}}
          onSubmit={handleSubmit}
          SubmitButtonProps={{ className: classes.submitButton }}
        />
      </Popover>
    </>
  );
}
