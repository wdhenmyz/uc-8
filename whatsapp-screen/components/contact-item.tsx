import { View, StyleSheet, Image, Text, TouchableOpacity, Animated, ScrollView } from 'react-native';
import React, { useState, useRef } from 'react';

import { User } from '../type/contact';

interface Props {
  contact: User;
}

export const ContactItem = (props: Props) => {

  const [expanded, setExpanded] = useState(false);
  const translateX = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    if (expanded) {
      // Move back to the original position
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setExpanded(false);
    } else {
      // Move the item slightly to the left
      Animated.timing(translateX, {
        toValue: -165, // Adjust this value for the desired movement
        duration: 300,
        useNativeDriver: true,
      }).start();
      setExpanded(true);
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      
      <Animated.View style={[styles.animatedContainer, { transform: [{ translateX }] }]}>

        <TouchableOpacity style={styles.container} onPress={handlePress}>

          <View style={styles.imagen}>
            <Image source={{ uri: props.contact.Image }} style={styles.img} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '52%', marginRight:20 }}>

            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.nome}>{props.contact.nome}</Text>
              <Text style={styles.infos}>{props.contact.info}</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'flex-end', width: 80 }}>
              <Text style={styles.infos}>{props.contact.date}</Text>
              <Text style={styles.infos}> &gt; </Text>
            </View>

          </View>

          <View style={styles.buttonContainer}>

            <TouchableOpacity style={styles.moreButton}>
              <Text style={styles.buttonText}>More</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.archiveButton}>
              <Text style={styles.buttonText}>Archive</Text>
            </TouchableOpacity>

          </View>     

        </TouchableOpacity>

      </Animated.View>
             
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
    alignItems: 'center',
    height: 80,
    width: '120%',
    borderColor: 'lightgrey',
    borderWidth: 1,
    overflow: 'hidden',
  },

  animatedContainer: {
    zIndex: 1, // Ensure the main content stays on top
  },

  imagen:{
    width: 70,
    height: 70,
    borderRadius: 45,
    marginRight: 17
  },

  img: {
    width: 70,
    height: 70,
    marginLeft: 10,
    marginRight: 5,
    backgroundColor: 'white',
    borderRadius: 45
  },
  
  nome: {
    fontSize: 15,
    fontWeight: '700',
    margin: 5
  },

  infos: {
    fontSize: 15,
    fontWeight: '300',
    margin: 5
  },

  buttonContainer: {
    flexDirection: 'row',
    zIndex: 0, // Ensure it stays below the animated item
  },

  moreButton: {
    backgroundColor: 'grey',
    width: 74,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
  },

  archiveButton: {
    backgroundColor: 'darkblue',
    width: 74,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
  },
});