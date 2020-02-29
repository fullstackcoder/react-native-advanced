import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createCompatNavigatorFactory, StackActions } from '@react-navigation/compat'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import SectionScreen from '../screens/SectionScreen'
import CoursesScreen from '../screens/CoursesScreen'
import ProjectsScreen from '../screens/ProjectsScreen'

const
    Stack = createStackNavigator(),
    ModalStack = createStackNavigator(),
    Tab = createBottomTabNavigator(),
    activeTintColor = "#4775f2",
    inactiveTintColor = "#b8bece"

const hideTabBar = navigation => {
    var
        state = navigation.dangerouslyGetState(),
        mainRoute = state.routes[state.index]

    if (mainRoute.state) {
        var
            activeRouteIndex = mainRoute.state.index,
            routeName = mainRoute.state.routeNames[activeRouteIndex]

        if (routeName === "Section") {
            console.log('isSection')
            // this.setState({ tabBarVisible: false })
            return false
        }
    }

    return true
}

const Home = () => (
    <Stack.Navigator
        mode="modal"
        headerMode="none"
    >
        <Stack.Screen 
            name="Home"
            component={HomeScreen}
        />
        <Stack.Screen 
            name="Section"
            component={SectionScreen}
            // options={({navigation}) => {
            //     console.log('Stack navigation', navigation)

            //     // return {
            //     //     tabBarVisible: false
            //     // }
            // }}
        />
    </Stack.Navigator>
)

const TabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor,
                inactiveTintColor
            }}
            // headerMode=""
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={({route, navigation}) => {
                    
                    return {
                        tabBarVisible: hideTabBar(navigation),
                        tabBarLabel: "Home",
                        tabBarIcon: ({focused}) => 
                            <Ionicons 
                                name="ios-home"
                                color={focused ? activeTintColor : inactiveTintColor}
                                size={26}
                            />
                    }
                }}
            />
            <Tab.Screen 
                name="Courses"
                component={CoursesScreen}
                options={{
                    // tabBarVisible: true,
                    tabBarLabel: "Courses",
                    tabBarIcon: ({focused}) => 
                        <Ionicons 
                            name="ios-albums"
                            color={focused ? activeTintColor : inactiveTintColor}
                            size={26}
                        />
                }}
            />
            <Tab.Screen 
                name="Project"
                component={ProjectsScreen}
                options={{
                    // tabBarVisible: true,
                    tabBarLabel: "Projects",
                    tabBarIcon: ({focused}) => 
                        <Ionicons 
                            name="ios-folder"
                            color={focused ? activeTintColor : inactiveTintColor}
                            size={26}
                        />
                }}
            />
        </Tab.Navigator>
    )
}

export {
    TabNavigator
}