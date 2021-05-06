import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import FireLoop from '../src/index';
const App = () => {
  return <FireLoop collectionRef={{}} auth={{}} diagnostics={{}} />;
};

ReactDOM.render(<App />, document.getElementById('root'));
