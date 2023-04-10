import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

function Detail(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: props.route.params.image}} />
      </View>
      <View style={styles.body_container}>
        <Text style={styles.title}>{props.route.params.title}</Text>
        <Text style={styles.desc}> {props.route.params.description} </Text>
        <Text style={styles.price}> {props.route.params.price} TL </Text>
      </View>
    </View>
  );
}

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    flex: 1,
    padding: 10,
  },
  image_container: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: Dimensions.get('window').width / 1.1,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000000',
    margin: 10,
  },
  desc: {
    fontStyle: 'italic',
    marginVertical: 5,
    color: '#454545',
    margin: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'right',
    color: '#070A52',
    margin: 10,
  },
});

export default Detail;
