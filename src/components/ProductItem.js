import React from 'react';
import styled from 'styled-components/native';

const Page = styled.View`
    flex:1;
    flexDirection:row;
    height:100px;
    backgroundColor:#FFFFFF;
    margin:10px;
    borderRadius:5px;
    padding:10px;
    alignItems:center;
`;

const NomePrato = styled.Text`
    fontSize:16px;
`;

const Imagem = styled.Image`
    width:150px;
    height:80px;
`;

const Screen = (props) => {
    return (
        <Page>
            <Imagem resizeMode="contain" source={props.data.img} />
            <NomePrato>{props.data.name}</NomePrato>
        </Page>

    );
}

export default Screen;