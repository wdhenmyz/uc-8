import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, FlatList } from 'react-native';
import { list  } from './data';
import { ProductItem } from './components/product-item';
import { Product } from './types/product';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Image 
          source={require('./assets/gamer2.jpg')}
          resizeMode='cover'
          style={styles.hero}
        />
        <View style={styles.janela} >       
          <View style={styles.loja}>
              <View style={styles.topo}><Text style={styles.h1}>hardware e PCs</Text></View>
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
    height: '100%',
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
    width: '70%',
    alignItems: 'center',  
    borderRadius: 10,
  },

  h1: {
    fontSize: 24, 
    color: "darkblue",
    fontWeight: 'bold',
  },
});
