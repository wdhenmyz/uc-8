import { View, StyleSheet, FlatList, ImageBackground, Image } from "react-native";

// puxando todos os produtos


export default function Screen (){
    const puravida2 = {uri: 'https://puravida.fbitsstatic.net/img/b/8d53d2f6-471b-46dc-8fe4-389bfe885646.jpg'}
    const puravida = {uri: 'https://files.cached.puravida.com.br/api/files/static/4ea73f5b-3588-4a18-9e90-5ccc9e71c77e'}
    const image = {uri: 'https://th.bing.com/th/id/OIP.7OiScC5GX8kPH0Sw_wwhsQHaKn?rs=1&pid=ImgDetMain'}

    return(
        <View style={styles.container}>
            <ImageBackground 
                source={image} 
                resizeMode="cover"
                style={styles.container}
            >
              <View style={styles.list}>
                <Image
                  source={puravida}
                  style={styles.tinyLogo}
                />
                <Image
                  source={puravida2}
                  style={styles.tinyLogo}
                  resizeMode= "cover"
                />
              </View>
                
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
      width: '100%',
    }
})