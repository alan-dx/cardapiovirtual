import { createBottomTabNavigator } from 'react-navigation-tabs';


import HomeStackNavigator from './HomeStackNavigator';
import Contato from '../screens/Contato';
import Horarios from '../screens/Horarios';
import Sobre from '../screens/Sobre';

const MainNavigator = createBottomTabNavigator({
    HomeStackNavigator:{
        screen:HomeStackNavigator
    },
    Contato:{
        screen:Contato
    },
    Horarios:{
        screen:Horarios
    },
    Sobre:{
        screen:Sobre
    }
},{
    tabBarOptions:{
        showIcon:true,
        showLabel:true,
    }

});

export default MainNavigator;