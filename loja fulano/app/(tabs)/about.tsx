import { View, Text, StyleSheet, Image } from "react-native";

export default function Screem(){
    return (
        <View style={styles.container}>
            <Text style={styles.txt}> 
                ola, eu sou wesllen dhenmyz brito ferreira
            </Text>

            <Text style={styles.txt}> 
                atualmente estou realizando curso de codificação
            </Text>

            <Text style={styles.txt}> 
               este é o meu primeiro projeto mobile do curso de TI no senac, criado com typescript em expo
            </Text>    
            
            <Text style={styles.txt}> 
               se quiser ver mais projetos que eu estou construindo veja meu github:
               https://github.com/wdhenmyz
            </Text>   

            <Text style={styles.txt}> 
               se quiser entrar em contato veja minhas redes sociais:               
            </Text>   

            <Text style={{fontSize:18, fontWeight:'bold'}}>whatsapp: (84) 99668-4859</Text>

            <Text style={{fontSize:18, fontWeight:'bold'}}>facebook: Wesllen Dhenmyz Brito Ferreira</Text> 
            
            <Text style={{fontSize:18, fontWeight:'bold'}}>Likedin: Wesllen D. B. Ferreira</Text> 

            <Image
                style={styles.img}
                source={require('../../assets/Leonardo_Lightning_XL_a_icon_of_IT_for_programimg_with_expo_1.png')}
                resizeMode="cover"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'lightblue',
        paddingTop: 30
    },

    txt: {
        fontSize: 17,
        textAlign: 'center',
        margin: 10
    },

    img: {
        width: 170,
        height: 170,
        borderRadius: 80,
        marginTop: 15,
        borderWidth: 4,
        borderColor: 'darkgreen',
    },
})