import { SafeAreaView } from "react-native-safe-area-context";

import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";
import React, { useState } from "react";

export default function Screen() {
    // receber o id
    const {id} = useLocalSearchParams();
    const idProduct = parseInt(id as string)
    const product = getProductById(idProduct)

    if (!product) {
        return router.back;
    }

    const [inputValue, setInputValue] = useState('');
    const number = parseFloat(inputValue);

    const comprar = ()=>{
        alert("você comprou o item: " + product.title + " por: R$ " + (number * product.price))
    }

    return(
        <SafeAreaView style={style.container }>
            <Stack.Screen options={{title:''}}/>
                
            <ScrollView style={style.area}>
                <Image
                    style={style.img}
                    source={{uri: product.image}}
                    resizeMode="cover"
                />
                <Text style={style.title}>{product.title}</Text>
                <Text style={style.description}>{product.description}</Text>
                <View style={style.priceArea}>
                    <Text style={style.price}>R$ {product.price}</Text>
                </View>
                
            </ScrollView>

            <View style={style.buttonArea}>
                <View style={style.inputArea}>
                    <Text style={style.txt}>quantidade de produtos</Text>
                    <TextInput
                        style={style.input}
                        placeholder="quantidade"
                        keyboardType="numeric"
                        value={inputValue}
                        onChangeText={setInputValue}
                    />
                </View>
                
                <Button
                    title="comprar agora"
                    onPress={comprar}
                />
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },

    area: {
        flex: 1,
        padding: 10,
    },

    buttonArea: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    img: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 10
    },
    
    title: {
        fontSize: 29,
        fontWeight: 'bold',
        marginBottom: 10
    },

    description: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "#555555"
    },

    priceArea: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#cccccc"
    },

    price: {
        fontSize: 22,
        textAlign: 'center'
    },

    inputArea: {
        flexDirection: "column",
        width: 120,
        alignItems: "center",
        justifyContent: "center",
    },

    txt:{
        fontSize: 15,
        textAlign: 'center',
        color: "#000000",
        fontWeight: '800'
    },

    input: {
        height: 40,
        width: 90,
        borderColor: 'gray',
        borderWidth: 3,
        marginTop: 10,
        marginBottom: 10,
        padding: 8,
        borderRadius: 10
      },
    

})