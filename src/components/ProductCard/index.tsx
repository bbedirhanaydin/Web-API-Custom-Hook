import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

const ProductCard = (props: any) => {
  return (
    <Pressable onPress={props.onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: props.product.image}} />
        <View style={styles.body_container}>
          <Text style={styles.title}> {props.product.title} </Text>
          <Text style={styles.price}> {props.product.price} TL </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0.7,
    borderColor: '#bdbdbd',
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF',
  },
  body_container: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#000000',
  },
  price: {
    textAlign: 'right',
    color: '#850000',
    fontSize: 15,
  },
});

export default ProductCard;
