import 'react-native-gesture-handler'
import * as React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator} from './navigator/TabNavigator'
import { reduxConstants as rc } from './constants'

const
    initialState = {
        action: "closeMenu",
        name: "User"
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
            case rc.user.UPDATE_NAME:
                return {
                    ...state,
                    name: action.name
                }
            default:
                return state
        }
    },
    store = createStore(reducer)

export default App = () => (
  <Provider store={store}>
      <NavigationContainer>
        
        <TabNavigator />
      </NavigationContainer>
  </Provider>
)