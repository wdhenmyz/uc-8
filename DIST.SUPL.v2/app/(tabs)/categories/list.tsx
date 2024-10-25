import { View, StyleSheet, FlatList, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";

// puxando todos as categorias
import { fetchCategories } from "../../../services/categorias";
import { CategoryItem } from "../../../components/category-item";
import { Category } from "../../../services/categorias";


export default function Screen (){
    const [categories, setCategories] = useState<Category[]>([]);

    // Função para buscar categorias e definir o estado
    const getCategories = async () => {
        const data = await fetchCategories();
        setCategories(data);
    };

    // useEffect para chamar a função quando o componente for montado
    useEffect(() => {
        getCategories();
    }, []);


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
        padding: 10,
    },

    listContent: {
        paddingBottom: 20
    }
})