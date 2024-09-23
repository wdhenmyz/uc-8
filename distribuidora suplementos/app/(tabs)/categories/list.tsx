import { View, StyleSheet, FlatList, ImageBackground } from "react-native";

// puxando todos as categorias
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";

export default function Screen (){
    const categories = getAllCategories();

    const image = {uri: 'https://th.bing.com/th/id/OIP.7OiScC5GX8kPH0Sw_wwhsQHaKn?rs=1&pid=ImgDetMain'}

    return(
        <View style={styles.container}>
            <ImageBackground 
                source={image} 
                resizeMode="cover"
                style={styles.container}
            >
                <FlatList
                    data={categories}
                    renderItem={({item}) => <CategoryItem data={item}/>}
                    keyExtractor={item => item.id.toString()}
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
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
    },

    listContent: {
        paddingBottom: 20
    }
})