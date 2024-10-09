import { View, StyleSheet, ScrollView, ImageBackground, Image, TextInput, FlatList } from "react-native";
import React from 'react';

// puxando todos os produtos

export default function Screen (){
    const puravida2 = {uri: 'https://puravida.fbitsstatic.net/img/b/8d53d2f6-471b-46dc-8fe4-389bfe885646.jpg'}
    const puravida = {uri: 'https://files.cached.puravida.com.br/api/files/static/4ea73f5b-3588-4a18-9e90-5ccc9e71c77e'}
    const image = {uri: 'https://th.bing.com/th/id/OIP.7OiScC5GX8kPH0Sw_wwhsQHaKn?rs=1&pid=ImgDetMain'}

    const [text, onChangeText] = React.useState('procure produtos');

    return(
        <View style={styles.container}>
            <ImageBackground 
                source={image} 
                resizeMode="cover"
                style={styles.container}
            >
              <View style={styles.list}>
                <ScrollView horizontal>
                  <Image
                    source={puravida}
                    style={styles.tinyLogo}
                    resizeMode="cover" // you can also set the resizeMode for consistency
                    key="puravida1"
                  />
                  <Image
                    source={puravida2}
                    style={styles.tinyLogo}
                    resizeMode="cover" // Ensuring both images follow the same resize mode
                    key="puravida2"
                  />
                </ScrollView>
              </View>

              <View style={styles.list2}>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeText}
                  value={text}
                />
                
              </View>

              <View style={styles.list3}></View>
                
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40
    },

    list: {
      width: '100%',
      height: 200,
      padding: 1,
      flexDirection: 'row',
      overflow: 'hidden'
    },

     tinyLogo: {
      width: 410,
      height: 160,
    },

    list2: {
      width: '100%',
      height: 564,
      alignItems:'center'
    },

    input: {
      height: 60,
      width: 300,
      margin: 12,
      borderWidth: 5,
      padding: 10,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'lightgrey',
      borderRadius: 20
    },

    list3: {
      width: '100%',
      height: 564,
      alignItems:'center',
      backgroundColor: 'white',
      marginTop: -562,
      opacity: 0.2
    },

    

    txt: {
      fontSize: 30
    },

})




