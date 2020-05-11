import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './style.css';
import { Container, Button } from '@material-ui/core';
import { SnackProvider, useSnackContext } from '../.';

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
        eat a health snack
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
const App = () => {
  return (
    <SnackProvider>
      <Container>
        <ChildComponent />
      </Container>
    </SnackProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
