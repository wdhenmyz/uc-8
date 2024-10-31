import { SafeAreaView } from "react-native-safe-area-context";

import { Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { Button } from "../../components/button";

import { getProductById, Products } from "../../services/produtos";

import React, { useState, useEffect } from "react";

export default async function Screen() {
    // receber o id
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string);

    // Log para verificar o idProduct
    console.log("ID do Produto:", idProduct);
  
    const [product, setProduct] = useState<Products | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Adicionando estado de carregamento
    const [hasFetched, setHasFetched] = useState(false); // Estado para controle de fetch

    // Função para buscar o produto pelo ID
    useEffect(() => {
        // Apenas chame a função se o ID for válido e se ainda não tiver buscado o produto
    if (!isNaN(idProduct) && !hasFetched)  {
          const fetchProduct = async () => {
            setIsLoading(true); // Começa o carregamento
            const result = await getProductById(idProduct);
            setProduct(result);
            setIsLoading(false); // Finaliza o carregamento
            setHasFetched(true); // Marcar como buscado
          };
          fetchProduct();
        } else if (isNaN(idProduct)) {
            console.error("ID do produto inválido");
            }      
      }, [idProduct, hasFetched]); // Certifique-se de que idProduct é a única dependência aqui


    // Renderizando o estado de carregamento
    if (isLoading) {
        return <Text style={style.title}>carregando...</Text>;
    }

    if (!product) {
        return <Text style={style.title}>Produto não encontrado</Text>;
    } else {

        const [inputValue, setInputValue] = useState('');
        const number = parseFloat(inputValue);

        const comprar = ()=>{
            if (number <= 0 || isNaN(number) || number == null) {
                alert("quantidade inválida")        
            } else {
                alert("você comprou o item: " + product.title + " por: R$ " + (number * product.price))
            }
            
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
                        <Text style={style.txt}>Quantidade de produtos</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Quantidade"
                            keyboardType="numeric"
                            value={inputValue}
                            onChangeText={setInputValue}
                        />
                    </View>
                    
                    <Button
                        title="Comprar"
                        onPress={comprar}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },

    area: {
        flex: 1,
        padding: 10,
        backgroundColor: 'lightblue',
    },

    buttonArea: {
        padding: 5,
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
        backgroundColor: "#dcdcdc"
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
        borderColor: 'gray',
        borderWidth: 3,
        borderRadius: 20
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