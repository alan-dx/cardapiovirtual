import React from 'react';
import styled from 'styled-components/native';

const Page = styled.View`

`;

const Imagem = styled.Image`
    width:26px;
    height:26px;
`;

const Screen = () => {
    return (
        <Page>

        </Page>
    );
}

Screen.navigationOptions = () => {
    return {
        tabBarLabel:'Horarios',
        tabBarIcon:({focused, tintColor}) => {
            if(focused) {
                return (
                    <Imagem source={require('../assets/images/horario_azul.png')} />
                );
            } else {
                return (
                    <Imagem source={require('../assets/images/horario_preto.png')} />
                );
            }
            
        }
    };
}

export default Screen;