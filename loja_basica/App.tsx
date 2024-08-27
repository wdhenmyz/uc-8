import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, FlatList } from 'react-native';
import { list  } from './data';
import { ProductItem } from './components/product-item';
import { Product } from './types/product';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
        <Image 
          source={require('./assets/loja.jpg')}
          resizeMode='cover'
          style={styles.hero}
        />
        <View style={styles.janela} >       
          <View style={styles.loja}>
              <Text style={styles.h1}>produtos</Text>
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
    backgroundColor: 'lightblue',
  },

  hero: {
    width: '100%',
    height: 120,
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
    height: '93.5%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
  },

  h1: {
    fontSize: 24,
  },
});
