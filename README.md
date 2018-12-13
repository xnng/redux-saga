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

## install redux-saga

```bash
$ yarn add redux-saga
```

```js
import createSagaMiddleware from "redux-saga";
import { helloSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(helloSaga);
```

## 使用 redux-saga

```js
export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}
```

`takeEvery` 用来监听 Action