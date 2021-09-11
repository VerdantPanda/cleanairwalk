import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import SavedRoutes from '../screens/SavedRoutes'
import NewRoutes from '../screens/NewRoutes'

const screens = {
    Home: {
        screen : Home
    },
    SavedRoutes: {
        screen : SavedRoutes
    },
    NewRoutes: {
        screen : NewRoutes
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);