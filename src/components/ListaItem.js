import React from 'react';
import styled from 'styled-components/native'
import {View} from 'react-native';

const Page = styled.TouchableHighlight`
    
`;

const Imagem = styled.Image`
    width:64px;
    height:64px;
    marginLeft:20px;
    marginRight:20px;
`;

const InfoArea = styled.View`

`;

const Area = styled.View`
    height:100px;
    flex:1;
    alignItems:center;
    flexDirection: row;
`;

const Titulo = styled.Text`
    color:#FFFFFF;
    fontSize:25px;
    fontWeight:bold;
`;

const Desc = styled.Text`
    color:#FFFFFF;
    fontSize:16px;
`;


const Screen = (props) => {

    const clicou = () => {
        props.navigation.navigate('HomeProducts',{title:props.data.title, products:props.data.products});
    };

    return (
        <Page onPress={clicou} underlayColor='#CCCCCC' >
            <Area style={{backgroundColor:props.data.bg}}>
            <Imagem source={props.data.img} />
            <InfoArea>
                <Titulo>{props.data.title}</Titulo>
                <Desc>{props.data.description}</Desc>
            </InfoArea>
            </Area>
        </Page>
    );
}

export default Screen;