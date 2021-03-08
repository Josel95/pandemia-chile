import React, { Fragment } from 'react'

import { Provider } from 'react-redux'

import { StatusBar } from 'react-native'

import { ThemeProvider } from 'react-native-elements'

import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import { store } from './redux/store'

import { Header } from './components/Header'

import { HomeScreen } from './screens/HomeScreen'

import { ComunaDetailScreen } from './screens/ComunaDetailScreen'

import { SearchScreen } from './screens/SearchScreen'

import { SplashScreen } from './screens/SplashScreen'

import { ErrorScreen } from './screens/ErrorScreen'

const Stack = createStackNavigator()

const headerOptions: StackNavigationOptions = {
    cardStyle: {
        backgroundColor: '#FFFFFF'
    },
    header: () => <Header />
}

const headerSearchOptions: StackNavigationOptions = {
    header: () => <Header search/>
}

const onlyTitleOptions: StackNavigationOptions = {
    header: () => <Header onlyTitle/>
}

const theme = {
    colors: {
        primary: '#03A8F4'
    }
}

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Provider store={store}>
                    <StatusBar barStyle="dark-content" />
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Splash" screenOptions={headerOptions}>
                            <Stack.Screen name="Splash" component={SplashScreen} />
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen name="ComunaDetail" component={ComunaDetailScreen} />
                            <Stack.Screen name="Search" component={SearchScreen} options={headerSearchOptions} />
                            <Stack.Screen name="Error" component={ErrorScreen} options={onlyTitleOptions}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </Provider>
            </Fragment>
        </ThemeProvider>
    );
};

export default App;
