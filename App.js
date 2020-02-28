import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import { reduxConstants as rc } from './constants'

const
    initialState = {
        action: "closeMenu"
    },
    reducer = (state=initialState, action) => {
        switch(action.type) {
            case rc.menuConstants.CLOSE_MENU:
                return {
                    ...state,
                    action: "closeMenu"
                }
            case rc.menuConstants.OPEN_MENU:
                return {
                    ...state,
                    action: "openMenu"
                }
            default:
                return state
        }
    },
    store = createStore(reducer)

export default App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
)