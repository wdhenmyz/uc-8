import { View, Text, StyleSheet } from "react-native";

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
               este é o meu primeiro projeto do meu curso de TI no senac, criado com typescript em expo
            </Text>    
            
            <Text style={styles.txt}> 
               se quiser ver mais projetos que eu estou construindo veja meu github:
               https://github.com/wdhenmyz
            </Text>   

            <Text style={styles.txt}> 
               se quiser entrar em contato veja minhas redes sociais:
               <Text></Text>
               <Text></Text>
            </Text>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

    txt: {
        fontSize: 17,
        textAlign: 'center',
        margin: 10
    }
})