import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

export default function Screem(){
    const image = {uri: 'https://th.bing.com/th/id/OIP.7OiScC5GX8kPH0Sw_wwhsQHaKn?rs=1&pid=ImgDetMain'};

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={image} 
                resizeMode="cover"
                style={styles.container2}
            >
            </ImageBackground>
                
                    <Text style={styles.txt}> 
                    ola, seja bem vindo a Distribuidora Suplementos
                    </Text>

                    <Text style={styles.txt}> 
                        nossa lojas se dedicam a oferecer Suplementos de qualidade para os consumidores
                    </Text>

                    <Text style={styles.txt}> 
                    este aplicativo é dedicado a facilitar a 
                    consulta e pedido de produtos para cada usuário
                    </Text>    
                    
                    <Text style={styles.txt}> 
                    se tiver em dúvida entre em contato através do nosso site oficial
                    https://www.DistribuidoraSuple.com.br
                    </Text>   

                    <Text style={styles.txt}> 
                    ou em outras redes sociais:               
                    </Text>   

                    <Text style={{fontSize:18, color: 'black', fontWeight: 'bold'}}>whatsapp: (99) 6666-6666</Text>

                    <Text style={{fontSize:18, color: 'black', fontWeight: 'bold'}}>facebook: Distribuidora Suplementos</Text> 
             

                <Image
                    style={styles.img}
                    source={require('../../assets/logosuplementos-removebg-preview.png')}
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
        padding: 1,
        paddingTop: 30
    },

    container2: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 1,
        paddingTop: 30,
        width: '100%',
        height: '100%',
        marginBottom: -640,
        opacity: 0.6
    },

    txt: {
        fontSize: 17,
        textAlign: 'center',
        margin: 10,
        color: 'black',
        fontWeight: 'bold'
    },

    img: {
        width: 230,
        height: 230,
        borderRadius: 115,
        marginTop: 1,
    },
})