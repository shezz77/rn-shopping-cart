
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import Colors from './../../constants/Colors';

const ProductItem = ({product, onViewDetail, onAddToCart}) => {
    return (
        <View style={styles.product}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: product.imageUrl}}/>
            </View>
  
            <View style={styles.details}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            </View>
            <View style={styles.actions}>
                <Button color={Colors.primary} title="View Details" onPress={onViewDetail}/>
                <Button color={Colors.accent} title="To Cart" onPress={onAddToCart}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    imageContainer: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: '60%',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
        paddingHorizontal: 20
    }
});

export default ProductItem;