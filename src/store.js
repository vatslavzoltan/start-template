import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createPromise } from 'redux-promise-middleware'

import createReducer from './reducers'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const middlewares = [
  createPromise({
    promiseTypeSuffixes: ['START', 'SUCCESS', 'FAIL'],
  }),
]

const enhancer = composeEnhancers(applyMiddleware(...middlewares))

const store = createStore(createReducer, enhancer)

export default store
