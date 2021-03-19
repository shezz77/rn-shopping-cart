import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailScreen = ({navigation, route}) => {
    const productId = route.params.productId;
    const selectedProduct = useSelector(state => state.products.availableProducts.find(p => p.id === productId))
    navigation.setOptions({title: selectedProduct.title})
    console.log(selectedProduct)
    return (
        <View><Text>{selectedProduct.title}</Text></View>
    )
}

const styles = StyleSheet.create({

});

export default ProductDetailScreen;