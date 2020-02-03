import { createStackNavigator } from 'react-navigation-stack';
import styled from 'styled-components/native';
import React from 'react';

import HomeList from '../screens/HomeList';
import HomeProducts from '../screens/HomeProducts';

const Imagem = styled.Image`
    width:26px;
    height:26px;
`;

const HomeStackNavigator = createStackNavigator({
    HomeList:{
        screen:HomeList
    },
    HomeProducts: {
        screen:HomeProducts
    }
},{//OLHAR AQUI
    navigationOptions:{//Como esse Stack também é uma tela é necssário aplicar esse detalhe
        tabBarLabel:'Home',
        tabBarIcon:({focused, tintColor})=>{
            if(focused){
                return(<Imagem source={require('../assets/images/home_azul.png')}></Imagem>)
            } else {
                return(<Imagem source={require('../assets/images/home_preto.png')}></Imagem>)
            }
        }
    }
});

export default HomeStackNavigator;

