import { View, StyleSheet, Image, Text, Button, ScrollView, TextInput } from 'react-native';
import React from 'react';
import {useState} from 'react'
import { Product } from '../types/product';

interface Props {
  product: Product;
}

export const ProductItem = (props: Props) => {

  const [number, setNumber] = React.useState('');

  const onChangeNumber = (text) => {
    setNumber(text);
  };

  const carrinho = () => {
    const total = props.product.preco * parseFloat(number);
    alert("voçê está comprando: "+props.product.info+" por: R$"+(total.toFixed(2)))
  };

  const [areaShow, setAreaShow] = useState(false);
  const mostrar = () => {
    setAreaShow(!areaShow)
  }

  return (
    <View style={styles.container}>
        <View style={styles.imagen}>
          <Image
            // chamando imagem remota
            source={{ uri: props.product.Image }}
            style={styles.img}
          />
        </View>   
        <View style={styles.produto}>
            <View style={styles.info}>
              <Text style={styles.nome}>{props.product.nome}</Text>
              <Button title="informações" onPress={mostrar} />        
              {areaShow  &&              
                  <View style={styles.area}> 
                    <ScrollView style={styles.scrollView} persistentScrollbar={true} >
                      <Text style={styles.preco}>R$ {props.product.preco.toFixed(2)}</Text>
                      <Text style={styles.txt}>{props.product.info}</Text>

                      <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        keyboardType="numeric"
                        placeholder="quantidade de compra"
                      />

                      <Button title="comprar" onPress={carrinho} /> 
                    </ScrollView>   
                  </View>
              }
            </View> 
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: 'darkgrey',
    borderRadius: 10,
    alignItems: 'center',
    height: 155,
    width: '100%'
  },

  imagen:{
    width: 90,
    height: 90,
  },

  img: {
    width: 90,
    height: 90,
    marginLeft: 10,
    marginRight: 5,
    backgroundColor: 'white',
    borderRadius: 10
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  produto:{
    flexDirection: 'column',
    marginLeft: 20,
    width: '70%',
    justifyContent: 'flex-start',
    height: '100%'
  },

  info: {
    marginLeft: 5,
    width: '95%'
  },
  
  nome: {
    fontSize: 19,
    fontWeight: 'bold',
  },

  preco: {
    fontWeight: 'bold',
    color: 'green',
    fontSize: 16
  },

  area: {
    borderRadius: 10,
    width: '100%',
    height: '55%'
  },

  scrollView: {
    backgroundColor: '#F5F5F5',
    paddingLeft: 2,
    paddingRight: 2,
    marginTop: 5,
    borderRadius: 5,
    overflow: 'scroll',
  },

  txt:{
    color: 'black',
    fontWeight: 'bold'
  }
});
