import { View, StyleSheet, Image, Text, Button, Linking } from 'react-native';
import { Product } from '../types/product';

interface Props {
  product: Product;
}

export const ProductItem = (props: Props) => {
  const carrinho = () => {
    //alert("voçê está comprando: "+props.product.nome)
    const url = 'https://web.whatsapp.com/';
    Linking.openURL(url).catch((err) => {
      console.error('failed to open URL:', err);
      alert('não foi possivel abrir o link');
    });
  };

  return (
    <View style={styles.container}>
      <Image
        // chamando imagem remota
        source={{ uri: props.product.Image }}
        style={styles.img}
      />
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
    marginBottom: 20,
  },
  img: {
    width: 90,
    height: 100,
  },
  info: {
    marginLeft: 20,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preco: {
    fontWeight: 'bold',
    color: 'green',
  },
});
