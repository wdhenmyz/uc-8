import { View, StyleSheet, FlatList } from "react-native";

// puxando todos as categorias
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";

export default function Screen (){
    const categories = getAllCategories();

    return(
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({item}) => <CategoryItem data={item}/>}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
                contentContainerStyle={styles.listContent}
            />
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