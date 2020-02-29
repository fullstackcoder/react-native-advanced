import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createCompatNavigatorFactory } from '@react-navigation/compat'
import HomeScreen from '../screens/HomeScreen'
import SectionScreen from '../screens/SectionScreen'

const Stack = createStackNavigator()

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Section"
            component={SectionScreen}
        />
    </Stack.Navigator>
)

// const AppNavigator = createCompatNavigatorFactory(createStackNavigator)(
//     {
//         Home: HomeScreen,
//         Section: SectionScreen
//     },
//     {
//         headerMode: false,
//         mode: "modal"
//     }
// )

export default StackNavigator