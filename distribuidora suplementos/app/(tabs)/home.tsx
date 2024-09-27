import { View, StyleSheet, FlatList, ImageBackground } from "react-native";

// puxando todos os produtos
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/product-item";

export default function Screen (){
    const products = getAllProducts();

    const image = {uri: 'https://th.bing.com/th/id/OIP.7OiScC5GX8kPH0Sw_wwhsQHaKn?rs=1&pid=ImgDetMain'}

    return(
        <View style={styles.container}>
            <ImageBackground 
                source={image} 
                resizeMode="cover"
                style={styles.container}
            >
                <FlatList
                    data={products}
                    renderItem={({item}) => <ProductItem data={item}/>}
                    keyExtractor={item => item.id.toString()}
                    style={styles.list}
                />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    list: {
        flex: 1,
        width: '100%',
        padding: 20,
    }
})