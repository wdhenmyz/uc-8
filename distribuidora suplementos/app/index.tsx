import { Image, ImageBackground, SafeAreaView, Text, View, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";
import React from "react";

export default function Screen (){
    const Start = () => {
        router.replace('/home')
    }

    const image = {uri: 'https://th.bing.com/th/id/OIP.7OiScC5GX8kPH0Sw_wwhsQHaKn?rs=1&pid=ImgDetMain'};

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                source={image} 
                resizeMode="cover"
                style={styles.container}
            >
                <Image
                    source={require('../assets/logosuplementos-removebg-preview.png')}
                    style={styles.logo}
                    resizeMode="cover"
                />

                <View style={styles.view2}></View>

                <View style={styles.view}>
                    <Text style={styles.h1}> Distribuidora Suplementos</Text>

                    <Text style={styles.h2}> 
                        Aqui você encontra todos os tipo de Suplementos que desejar,
                        venha e compre
                    </Text>

                </View>

                <TextInput 
                  style={styles.input}
                  placeholder='digite seu usuário/email/número:'
                />

                <TextInput 
                  style={styles.input}
                  placeholder='digite sua senha:'
                />

                <Button
                    title="entrar na conta"    
                    onPress={Start}
                />
                
                <Button
                    title="entrar como convidado"    
                    onPress={Start}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    logo: {
        width: 290,
        height: 200,
        marginBottom: 1,
    },

    view: {
        backgroundColor: 'grey',  
        borderRadius: 20, 
        padding: 5,
        width: '80%',       
        height: 120,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    view2: {
        backgroundColor: 'white',  
        borderRadius: 20, 
        padding: 5,
        width: '60%',       
        height: 180,
        marginBottom: 10,
        marginTop: -196,
        opacity: 0.1
    },

    input: {
        width: 250,
        height: 40,
        backgroundColor: 'grey',
        borderRadius: 5,
        marginBottom: 10,
        textAlign:'center',
    },

    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },

    h2: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    }
})