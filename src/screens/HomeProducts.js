import React, { useState } from 'react';
import styled from 'styled-components/native';

import ProductItem from '../components/ProductItem'

const Page = styled.View`
    flex:1;
    backgroundColor:#CCCCCC;
`;

const Lista = styled.FlatList``;

const Imagem = styled.Image`
    width:26px;
    height:26px;
`;

const Screen = (props) => {
    
    const[list,setList] = useState({
        listProducts:props.navigation.state.params.products//Pegando as informações passadas no navigation
    })
    
    return (
        <Page>
            <Lista data={list.listProducts} renderItem={({item})=> <ProductItem data={item} />}/>
        </Page>
    );
}

Screen.navigationOptions = ({navigation}) => {
    return {
        title:navigation.state.params.title,//Pegando as informações passadas no navigation
        tabBarLabel:'Home',
        tabBarIcon:({focused, tintColor}) => {
            if(focused) {
                return (
                    <Imagem source={require('../assets/images/home_azul.png')} />
                );
            } else {
                return (
                    <Imagem source={require('../assets/images/home_preto.png')} />
                );
            }
            
        }
    };
}

export default Screen;