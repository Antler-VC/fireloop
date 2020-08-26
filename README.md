# Fireloop 🔥

[![npm latest release](https://badgen.net/npm/v/fireloop)](https://www.npmjs.com/fireloop)
[![Minified size](https://badgen.net/bundlephobia/min/fireloop)](https://bundlephobia.com/result?p=fireloop)

A component that lets your users give you feedback on your product

<!-- [![Storybook badge](https://raw.githubusercontent.com/storybookjs/brand/master/badge/badge-storybook.svg)](https://antlervc.github.io/multiselect) -->

<!-- [**Full documentation with props**](https://antlervc.github.io/multiselect?path=/docs/multiselect--multiple) -->

## Quick start

```jsx

import FireLoop from 'fireloop'
import {db,auth} from '../../firebase' // set your firebase app file location

...
// add inside your apps jsx
<FireLoop collectionRef={db.collection('feedback')} auth={auth} />
...
```

### props

```ts
  collectionRef: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;
  auth: firebase.auth.Auth;
```
