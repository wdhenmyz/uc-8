import { Text, SafeAreaView, StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native';

import { list } from './data';
import { User } from './type/contact';
import { ContactItem } from './components/contact-item';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topo}>  

        <TouchableOpacity>
          <Text style={{color:'blue', fontSize: 20}}>Edit</Text>
        </TouchableOpacity>

        
        <Text style={{fontSize: 20}}>Chat</Text>
            

        <TouchableOpacity>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3917/3917361.png',
            }}
          />
        </TouchableOpacity>  
      </View>

      <View style={styles.topo2}>  
        <TouchableOpacity><Text style={{color:'blue', fontSize: 20}}>Broadcast Lists</Text></TouchableOpacity>
        <TouchableOpacity><Text style={{color:'blue', fontSize: 20}}>New Group</Text></TouchableOpacity>       
      </View>

      <View style={{flex: 1}}>
          <FlatList
            data={list}
            renderItem={ ({item} : {item: User}) => (<ContactItem contact={item}/>) }
            keyExtractor={item => item.id.toString()}               
          />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'FFFFFF',    
    alignItems: 'center'
  },

  topo: {
    backgroundColor:'lightgrey',
    height: 80,
    width:'100%',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'flex-end'
  },

  tinyLogo: {
    width: 30,
    height: 30,
  },

  topo2: {
    backgroundColor:'FFFFFF',
    height: 50,
    width:'100%',
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },
});
