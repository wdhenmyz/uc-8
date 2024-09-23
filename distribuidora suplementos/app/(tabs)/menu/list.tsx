import { useState, useRef } from "react";
import { View, StyleSheet, Animated, TouchableOpacity, Image } from "react-native";


export default function Screen (){

    return(
        <View style={styles.container}>

            <TouchableOpacity style={styles.config}>
                <Image
                    source={{uri: 'https://cdn-icons-png.flaticon.com/128/2645/2645890.png'}}
                    resizeMode="cover"
                    style={styles.IconeConfig}
                />
    
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#363636',
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    },

    config: {
        zIndex: 1, // Ensure the main content stays on top
        width: '95%',
        height: 60,
        backgroundColor: '#B0C4DE',
        borderRadius: 10,
        justifyContent: 'center'
    },

    IconeConfig: {
        height: 40, 
        width: 40,
        marginLeft: 5,
        marginRight: 5
    }
})