import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./pages/Home";
import CourseList from "./pages/CourseList";
import Welcome from "./pages/Welcome"
import Login from "./pages/Login"

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Routes = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen 
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="HomeScreens"
                component={HomeScreens}
            />
        </Stack.Navigator>
    )
}

const HomeScreens = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: '#ffffff',
                borderTopWidth: 0,

                bottom: 20,
                left: 20,
                right: 20,
                elevation: 1,
                borderRadius: 4,
                height: 60
            },
            headerShown: false
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        if(focused){
                            return <Ionicons name="home" size={size} color="#14793C"/>
                        }

                        return <Ionicons name="home-outline" size={size} color="#FFB03B"/>
                    }
                }}
            />
            <Tab.Screen
                name="CourseList"
                component={CourseList}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        if(focused){
                            return <Ionicons name="ios-list" size={size} color="#14793C"/>
                        }

                        return <Ionicons name="ios-list-outline" size={size} color="#FFB03B"/>
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default Routes;