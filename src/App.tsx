import React, { Fragment } from 'react'

import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

import { HomeScreen } from './screens/HomeScreen'

import { ComunaDetailScreen } from './screens/ComunaDetailScreen'

import { SearchScreen } from './screens/SearchScreen'

const Stack = createStackNavigator()

const App = () => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="ComunaDetail" component={ComunaDetailScreen} />
                    <Stack.Screen name="SearchScreen" component={SearchScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </ Fragment>
    );
};

export default App;
