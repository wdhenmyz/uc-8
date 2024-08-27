import { View, StyleSheet, Image, Text, Button } from 'react-native';
import { Product } from '../types/product';

interface Props {
  product: Product;
}

export const ProductItem = (props: Props) => {
  const carrinho = () => {
    alert("voçê está comprando: "+props.product.info+" por: R$"+props.product.preco)
    /*const url = 'https://web.whatsapp.com/';
    Linking.openURL(url).catch((err) => {
      console.error('failed to open URL:', err);
      alert('não foi possivel abrir o link');
    });*/
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagen}>
        <Image
          // chamando imagem remota
          source={{ uri: props.product.Image }}
          style={styles.img}
        />
      </View>        
      <View style={styles.info}>
        <Text style={styles.nome}>{props.product.nome}</Text>
        <Text style={styles.preco}>R$ {props.product.preco.toFixed(2)}</Text>
        <Button title="comprar" onPress={carrinho} />
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
    backgroundColor: 'white'
  },
  info: {
    marginLeft: 20,
    width: '65%'
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
});
