import React, { useEffect } from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import { addToCart } from './store/CartSlice';

const ProductDetailScreen = ({navigation, route}) => {
    const dispatch = useDispatch();
    const productId = route.params.productId;
    const selectedProduct = useSelector(state => state.products.availableProducts.find(p => p.id === productId))
    useEffect(() => {
        navigation.setOptions({title: selectedProduct.title})

    }, [])
    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
            <View style={styles.actions}>

            <Button color={Colors.primary} title={'Add to Cart'} onPress={() => dispatch(addToCart(selectedProduct))}/>
            </View>
            <Text style={styles.price}> ${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'open-sans-bold'
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
        fontFamily: 'open-sans'
    },
});

export default ProductDetailScreen;