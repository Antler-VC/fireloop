import React, { useState } from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { useSnackContext } from '../src/SnackContext';
import { SnackProvider } from '../src/SnackProvider';
import { Button, duration } from '@material-ui/core';

function ChildComponent() {
  const snack = useSnackContext();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          snack.open({ message: 'soo good', severity: 'success' });
        }}
      >
        eat Samosas
      </Button>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          snack.open({ message: 'sad', severity: 'error', duration: 1000 });
        }}
      >
        eat KFC
      </Button>
    </>
  );
}
export default {
  title: 'Global Snack',
  component: SnackProvider,
  decorators: [],
};

export const Multiple = () => {
  return (
    <SnackProvider>
      <ChildComponent />
    </SnackProvider>
  );
};
