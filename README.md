## Redux Enviroment

```bash
$ yarn add redux react-redux
$ yarn add --dev redux-devtools-extension
```

```js
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```