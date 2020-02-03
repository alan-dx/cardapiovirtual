import React, { useState } from 'react';
import styled from 'styled-components/native';

import ListaItem from '../components/ListaItem'

const Page = styled.View`

`;

const Imagem = styled.Image`
    width:26px;
    height:26px;
`;

const Lista = styled.FlatList`

`;

const Texto = styled.Text``;

const Screen = (props) => {
    
    const [list, setList] = useState({
        listItems:[
            {
                key:'1',
                title:'Prato Executivo',
                img:require('../assets/images/tipos/pe.png'),
                description:'Pratos já prontos!',
                bg:'#e35339',
                products:[
                    {key:'1',name:'Prato de Frango', img:require('../assets/images/cardapio/pe/executivos_frang_.png')},
                    {key:'2',name:'Prato de Peixe', img:require('../assets/images/cardapio/pe/executivos_peix_.png')},
                    {key:'3',name:'Prato de Frango', img:require('../assets/images/cardapio/pe/executivos_picanh_.png')},
                ]

            },
            {
                key:'2',
                title:'Saladas',
                img:require('../assets/images/tipos/saladas.png'),
                description:'Pratos Saudáveis!',
                bg:'#a6bb24',
                products:[
                    {key:'1',name:'Salada de Frango', img:require('../assets/images/cardapio/saladas/salada-fr.png')},
                    {key:'2',name:'Salada de Agua Doce', img:require('../assets/images/cardapio/saladas/salada_aguadoc_.png')},
                    {key:'3',name:'Salada de Salmao', img:require('../assets/images/cardapio/saladas/salada_salma.png')},
                ]

            },
            {
                key:'3',
                title:'Bebidas',
                img:require('../assets/images/tipos/bebidas.png'),
                description:'Bebidas Com e Sem Alcool!',
                bg:'#079ed4',
                products:[
                    {key:'1',name:'Caipirosca', img:require('../assets/images/cardapio/bebidas/capirosc_3.png')},
                    {key:'2',name:'Cookie Cream', img:require('../assets/images/cardapio/bebidas/cookies_crea.png')},
                    {key:'3',name:'Morango GD', img:require('../assets/images/cardapio/bebidas/morango_gd.png')},
                    {key:'4',name:'Patra', img:require('../assets/images/cardapio/bebidas/patra.png')},
                    {key:'5',name:'Suco Fitness', img:require('../assets/images/cardapio/bebidas/suco_fitines_gd.png')},
                ]

            },
            {
                key:'4',
                title:'Sobremesas',
                img:require('../assets/images/tipos/sobremesa.png'),
                description:'Sobremesas Especiais!',
                bg:'#fcb81c',
                products:[
                    {key:'1',name:'Brownie', img:require('../assets/images/cardapio/sobremesas/brownie_gd.png')},
                    {key:'2',name:'Cookie Cream', img:require('../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png')},
                    {key:'3',name:'Morango GD', img:require('../assets/images/cardapio/sobremesas/delicia_gelada_gd.png')},
                ]

            },

        ]
    })
    
    return (
        <Page>
            <Lista data={list.listItems} renderItem={({item}) => <ListaItem data={item} navigation={props.navigation}/> } />
        </Page>
    );
}

Screen.navigationOptions = () => {
    return {
        title:'Restaurante LeBife',
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