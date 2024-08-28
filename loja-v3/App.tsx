import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Button } from 'react-native';
import React, { useState } from 'react';

import { list as hardware } from './data';
import { Product } from './types/product';
import { ProductItem } from './components/product-item';

import { pc as pc} from './data_2';
import { List } from './types/product_2';
import { PCs } from './components/product_2'; 


export default function App() {
  // State to track which list is currently displayed
  const [currentList, setCurrentList] = useState('hardwares');

  // Function to toggle between lists
  const mudar = () => {
    setCurrentList(prevList => (prevList === 'hardwares' ? 'pcs' : 'hardwares'));
  };

  // Select the data based on currentList state
  const list = currentList === 'hardwares' ? hardware : pc;

  return (
    <SafeAreaView style={styles.container}>
        <Image 
          source={require('./assets/gamer2.jpg')}
          resizeMode='cover'
          style={styles.hero}
        />
        <View style={styles.janela}> 
          <View style={styles.loja}>
              <View style={styles.topo}>
                {/* Display title based on the current list */}
                <Text style={styles.h1}>{currentList === 'hardwares' ? 'Hardwares' : 'computadores'}</Text>
                <Button title='mudar lista' onPress = {mudar}/>    
              </View>
                <FlatList
                  data={list}
                  renderItem={ ({item} : {item: Product}) => (<ProductItem product={item}/>) }
                  keyExtractor={item => item.id.toString()}               
                />
          </View>
        </View>
        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
  },

  hero: {
    width: '100%',
    height: 190,
  },

  janela: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '103%',
    height: '90%',
  },

  loja: {
    marginTop: 5,
    width: '95%',
    height: '99%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
  },

  topo: {
    backgroundColor: "darkgrey",
    width: '85%',
    height: 50,
    alignItems: 'center',  
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    flexDirection:'row',
    justifyContent: 'space-around'
  },

  h1: {
    fontSize: 24, 
    color: "darkblue",
    fontWeight: 'bold',
  },
});
