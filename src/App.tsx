import React, { Fragment, useEffect } from 'react'

import { Provider } from 'react-redux'

import { StatusBar } from 'react-native'

import { ThemeProvider } from 'react-native-elements'

import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import { useLocation, LocationError } from './hooks/useLocation'

import { useComuna } from './hooks/useComuna'

import { store } from './redux/store'

import { Header } from './components/Header'

import { HomeScreen } from './screens/HomeScreen'

import { ComunaDetailScreen } from './screens/ComunaDetailScreen'

import { SearchScreen } from './screens/SearchScreen'

import { setComuna } from './redux/actions/comunasActions'

const DEFAULT_COMUNA = 'santiago'

const Stack = createStackNavigator()

const headerOptions: StackNavigationOptions = {
    cardStyle: {
        backgroundColor: '#FFFFFF'
    },
    header: () => <Header />
}

const theme = {
    colors: {
        primary: '#03A8F4'
    }
}

const App = () => {

    const { comunaName, error: locationError } = useLocation()

    const { comuna, getComunaData } = useComuna()

    useEffect(() => {
        getComunaData(comunaName || DEFAULT_COMUNA)
    }, [comunaName])

    useEffect(() => {
        if(comuna) {
            store.dispatch(setComuna(comuna, locationError !== LocationError.PERMISSION_DENIED))
        }
    }, [comuna])

    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <Provider store={store}>
                    <StatusBar barStyle="dark-content" />
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={headerOptions}>
                            <Stack.Screen name="Home" component={HomeScreen} />
                            <Stack.Screen name="ComunaDetail" component={ComunaDetailScreen} />
                            <Stack.Screen name="Search" component={SearchScreen} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </Provider>
            </Fragment>
        </ThemeProvider>
    );
};

export default App;
